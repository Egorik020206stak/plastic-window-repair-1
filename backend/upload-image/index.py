import json
import os
import base64
import uuid
import boto3

def handler(event: dict, context) -> dict:
    """Загрузка изображения в S3 хранилище. Принимает base64-encoded файл, возвращает публичный URL."""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    file_data = body.get('file')
    file_name = body.get('fileName', 'image.jpg')
    content_type = body.get('contentType', 'image/jpeg')

    if not file_data:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Файл не передан'})
        }

    image_bytes = base64.b64decode(file_data)

    ext = file_name.rsplit('.', 1)[-1].lower() if '.' in file_name else 'jpg'
    key = f"gallery/{uuid.uuid4()}.{ext}"

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )

    s3.put_object(
        Bucket='files',
        Key=key,
        Body=image_bytes,
        ContentType=content_type,
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'url': cdn_url})
    }
