import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [showMeasurementModal, setShowMeasurementModal] = useState(false);

  const services = [
    {
      icon: 'Home',
      title: 'Установка окон',
      description: 'Профессиональная установка пластиковых окон',
      link: '/gallery'
    },
    {
      icon: 'Wrench',
      title: 'Замена окон',
      description: 'Быстрая и качественная замена старых окон на новые',
    },
    {
      icon: 'Settings',
      title: 'Ремонт окон',
      description: 'Замена фурнитуры, изготовление и замена стеклопакетов',
      link: '/window-repair'
    },
  ];

  const products = [
    {
      name: 'Эмаль «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Эмалевые краски для внутренних и наружных работ',
    },
    {
      name: 'Грунтовка «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Грунтовка для подготовки поверхностей перед покраской',
    },
    {
      name: 'Пропитка «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Защитная пропитка для деревянных поверхностей',
    },
    {
      name: 'Потолочная краска «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Специальная краска для потолков с высокой укрывистостью',
    },
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/8dad1c72-f4b8-4e8b-afe7-05a32c62919f.jpg',
      title: 'Установка окон',
      description: 'Комплексная замена всех окон',
      link: '/gallery'
    },

    {
      image: 'https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/55796747-f555-43c5-83af-fe1b84e6f09d.jpg',
      title: 'Качественные материалы',
      description: 'Профессиональные краски и долговечный результат',
      link: '/materials'
    },
  ];

  const faqs = [

    {
      question: 'Сколько времени занимает установка одного окна?',
      answer: 'В среднем установка одного стандартного окна занимает 2-3 часа с учетом подготовки и уборки.',
    },
    {
      question: 'Какие краски вы используете?',
      answer: 'Мы работаем только с профессиональными красками для ПВХ и дерева ведущих европейских производителей.',
    },
    {
      question: 'Сколько стоит выезд на замер?',
      answer: 'Выезд замерщика по городу — 200 рублей, загород — от 500 рублей.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/54a6bf39-e828-4dbd-ae32-04dc56bdbaa8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert('Ошибка отправки: ' + (result.error || 'Попробуйте позже'));
      }
    } catch (error) {
      alert('Ошибка отправки заявки. Позвоните нам: +7 (902) 145-49-42');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ООО "Эридан"</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#products" className="hover:text-primary transition-colors">Краска</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90" onClick={() => alert('📞 Позвонить нам:\n\n+7 (902) 145-49-42\nАнастасия\nОфис')}>
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/8dad1c72-f4b8-4e8b-afe7-05a32c62919f.jpg')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
              ООО "Эридан"
            </h1>
            <p className="text-2xl md:text-3xl mb-8 animate-fade-in">
              Пластиковые окна, краска и строительные работы
            </p>
            <p className="text-xl mb-10 text-slate-200 animate-slide-up">
              Профессиональная установка и ремонт пластиковых окон с 2020 года
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8"
                onClick={() => setShowMeasurementModal(true)}
              >
                Заказать замер
              </Button>

            </div>
            <div className="flex flex-wrap gap-8 justify-center pt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm text-slate-200">Довольных клиентов</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm text-slate-200">Поддержка клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр работ с пластиковыми окнами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {service.link ? (
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full">
                        Подробнее
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="w-full">
                      Подробнее
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Краска Саяночка</h2>
            <Link to="/paints-catalog">
              <Button size="lg" className="mt-4">
                Посмотреть весь каталог
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Paintbrush" className="text-primary" size={64} />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/paints-catalog">
                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      <Icon name="CheckCircle" size={18} className="mr-2" />
                      Выбрать
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">О нас</h2>
              <p className="text-xl text-muted-foreground mb-4">
                Наша основная миссия заключается в том, чтобы создавать комфортные и безопасные условия для работы реализуя проекты как для частных клиентов, так и для муниципальных учреждений.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12 text-left">

              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Наши услуги</h3>
              <p className="text-base text-muted-foreground mb-4">Мы работаем с:</p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li><strong className="text-foreground">Частными клиентами:</strong> Предлагаем индивидуальные решения, которые соответствуют уникальным потребностям и требованиям каждого заказчика.</li>
                <li><strong className="text-foreground">Муниципальными учреждениями:</strong> Сотрудничаем с образовательными, медицинскими и культурными учреждениями, предоставляя качественные услуги и товары, соответствующие современным стандартам.</li>
                <li><strong className="text-foreground">Организациями:</strong> Обеспечиваем предприятия всем необходимым для эффективного и безопасного функционирования.</li>
              </ul>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Сертификация</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Понимая важность качества и безопасности, ООО "Эридан" использует только сертифицированные материалы и продукты в области работы. Это подтверждает, что наши товары и услуги соответствуют самым высоким стандартам и требованиям. Мы гордимся тем, что можем работать в такой чувствительной к качеству сфере.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Icon name="Users" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-bold text-xl mb-2">Профессионализм</h3>
                <p className="text-muted-foreground">Опытные специалисты с квалифицированной поддержкой</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Icon name="Heart" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-bold text-xl mb-2">Индивидуальный подход</h3>
                <p className="text-muted-foreground">Учитываем все пожелания и предложения клиентов</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Icon name="ShieldCheck" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-bold text-xl mb-2">Надежность</h3>
                <p className="text-muted-foreground">Строгий контроль качества каждого проекта</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg font-semibold text-primary">
                Миссия ООО "Эридан" — ваше комфортное и безопасное развитие!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-slate-50">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку и мы перезвоним в течение рабочего времени</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Телефон</label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 950 130 7721 Ремонт и строительство</p>
                      <p className="text-muted-foreground">8 (902) 145-49-42 Офис</p>
                      <p className="text-muted-foreground">8 (908) 654-95-25 Директор</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">ooo-eridan_1@mail.ru</p>
                      <p className="text-muted-foreground">steklo_master38@mail.ru</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Адрес и режим работы</h3>
                      <p className="text-muted-foreground">Иркутская область</p>
                      <p className="text-muted-foreground">г. Саянск, мкр Олимпийский, дом 18</p>
                      <p className="text-muted-foreground font-semibold mt-2">Пн-Пт: 9:00 - 17:00</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={28} />
                <span className="text-xl font-bold">ООО "Эридан"</span>
              </div>
              <p className="text-slate-400">Профессиональная установка и ремонт пластиковых окон с 2020 года</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Установка окон</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Замена окон</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Разделы</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#products" className="hover:text-white transition-colors">Краска Саяночка</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-slate-400">
                <li>+7 950 130 7721 Ремонт и строительство</li>
                <li>8 (902) 145-49-42 Офис</li>
                <li>8 (908) 654-95-25 Директор</li>
                <li>ooo-eridan_1@mail.ru</li>
                <li>steklo_master38@mail.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2020-2025 ООО "Эридан". Все права защищены.</p>
          </div>
        </div>
      </footer>
      <ChatWidget />
      
      {showMeasurementModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowMeasurementModal(false)}>
          <Card className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl mb-2">Заказать замер</CardTitle>
                  <CardDescription>Свяжитесь с нами для замера окон</CardDescription>
                </div>
                <button onClick={() => setShowMeasurementModal(false)} className="text-muted-foreground hover:text-foreground">
                  <Icon name="X" size={24} />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <a href="tel:+79501307721" className="text-2xl font-bold text-primary hover:underline">
                    +7 950 130 7721
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">Звоните в рабочее время: Пн-Сб 9:00-18:00</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Расценки на замер:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">По городу</div>
                      <div className="text-2xl font-bold text-primary">200 ₽</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Icon name="Map" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">За городом</div>
                      <div className="text-2xl font-bold text-primary">от 500 ₽</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => {
                  window.location.href = 'tel:+79501307721';
                }}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;