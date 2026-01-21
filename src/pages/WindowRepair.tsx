import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const WindowRepair = () => {
  const services = [
    {
      icon: 'Wrench',
      title: 'Замена фурнитуры',
      description: 'Замена ручек, петель, замков и других механизмов',
      price: 'от 500 ₽'
    },
    {
      icon: 'Square',
      title: 'Изготовление стеклопакетов',
      description: 'Изготовление стеклопакетов любых размеров и конфигураций',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Replace',
      title: 'Замена стеклопакетов',
      description: 'Быстрая замена поврежденных стеклопакетов без демонтажа окна',
      price: 'от 1500 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Home" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ООО "Эридан"</span>
            </Link>
            <Link to="/">
              <Button variant="outline">
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                На главную
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Ремонт окон</h1>
            <p className="text-xl text-muted-foreground">Полный спектр услуг по ремонту и обслуживанию окон</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon} className="text-primary" size={40} />
                  </div>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                  <CardDescription className="text-base text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full">
                    Заказать услугу
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Info" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Важная информация</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Бесплатная диагностика при заказе ремонта</li>
                      <li>• Гарантия на все виды работ — 12 месяцев</li>
                      <li>• Выезд мастера в день обращения</li>
                      <li>• Работаем с понедельника по пятницу с 9:00 до 17:00</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowRepair;
