import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''API для отправки заявок на email'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        data = json.loads(event.get('body', '{}'))
        name = data.get('name', '')
        phone = data.get('phone', '')
        message = data.get('message', '')
        form_type = data.get('type', 'contact')

        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False),
                'isBase64Encoded': False
            }

        smtp_password = os.environ.get('SMTP_PASSWORD')
        if not smtp_password:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'SMTP не настроен', 'debug': 'Пароль не найден в переменных окружения'}, ensure_ascii=False),
                'isBase64Encoded': False
            }

        email_from = 'ooo-eridan_1@mail.ru'
        email_to = 'ooo-eridan_1@mail.ru'

        msg = MIMEMultipart()
        msg['From'] = email_from
        msg['To'] = email_to
        msg['Subject'] = f'Новая заявка с сайта: {form_type}'

        body = f'''
Новая заявка с сайта ООО "Эридан"

Тип заявки: {form_type}
Имя: {name}
Телефон: {phone}
Сообщение: {message if message else "Не указано"}

---
Отправлено автоматически с сайта
'''

        msg.attach(MIMEText(body, 'plain', 'utf-8'))

        server = smtplib.SMTP_SSL('smtp.mail.ru', 465, timeout=10)
        server.login(email_from, smtp_password)
        server.send_message(msg)
        server.quit()

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}, ensure_ascii=False),
            'isBase64Encoded': False
        }

    except smtplib.SMTPAuthenticationError as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Ошибка аутентификации SMTP', 'details': 'Проверьте пароль приложения'}, ensure_ascii=False),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e), 'type': type(e).__name__}, ensure_ascii=False),
            'isBase64Encoded': False
        }