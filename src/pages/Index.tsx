import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Home',
      title: 'Установка окон',
      description: 'Профессиональная установка пластиковых окон',
    },
    {
      icon: 'Wrench',
      title: 'Замена окон',
      description: 'Быстрая и качественная замена старых окон на новые',
    },
    {
      icon: 'ShieldCheck',
      title: 'Ремонт окон',
      description: 'Устранение неполадок, регулировка фурнитуры, замена уплотнителей',
    },
  ];

  const products = [
    {
      name: 'Краски «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Качественные краски для различных поверхностей',
    },
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/8dad1c72-f4b8-4e8b-afe7-05a32c62919f.jpg',
      title: 'Установка окон в частном доме',
      description: 'Комплексная замена всех окон',
    },
    {
      image: 'https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/3a84a3b6-2122-4f5a-b65c-0025fb29479c.jpg',
      title: 'Ремонт окон',
      description: 'Восстановление эстетического вида окон',
    },
    {
      image: 'https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/55796747-f555-43c5-83af-fe1b84e6f09d.jpg',
      title: 'Качественные материалы',
      description: 'Профессиональные краски и долговечный результат',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
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
              <a href="#products" className="hover:text-primary transition-colors">Товары</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <a href="tel:+79501307721">
              <Button className="bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
            </a>
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
              Профессиональная установка и ремонт пластиковых окон с 2021 года
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
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
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
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
            <p className="text-xl text-muted-foreground">Профессиональные материалы для окон</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
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
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
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
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Иркутская область</p>
                      <p className="text-muted-foreground">г. Саянск, мкр Олимпийский, дом 18</p>
                      <p className="text-muted-foreground">Пн-Сб: 9:00 - 18:00</p>
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
              <p className="text-slate-400">Профессиональная установка и ремонт пластиковых окон с 2014 года</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Установка окон</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Замена окон</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Ремонт окон</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-slate-400">
                <li>8 (902) 145-49-42 Офис</li>
                <li>8 (908) 654-95-25 Директор</li>
                <li>ooo-eridan_1@mail.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ООО "Эридан". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;