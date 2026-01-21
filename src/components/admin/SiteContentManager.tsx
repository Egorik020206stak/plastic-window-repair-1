import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    stats: { value: string; label: string }[];
  };
  services: {
    icon: string;
    title: string;
    description: string;
    link?: string;
  }[];
  products: {
    name: string;
    price: string;
    description: string;
  }[];
  portfolio: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  about: {
    title: string;
    mission: string;
    sections: {
      title: string;
      content: string;
      items: string[];
    }[];
    values: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  contacts: {
    phones: { number: string; label: string }[];
    emails: string[];
    address: {
      region: string;
      city: string;
      street: string;
    };
    workingHours: string;
  };
}

const defaultContent: SiteContent = {
  hero: {
    title: 'ООО "Эридан"',
    subtitle: 'Пластиковые окна, краска и строительные работы',
    description: 'Профессиональная установка и ремонт пластиковых окон с 2020 года',
    backgroundImage: 'https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/8dad1c72-f4b8-4e8b-afe7-05a32c62919f.jpg',
    stats: [
      { value: '500+', label: 'Довольных клиентов' },
      { value: '24/7', label: 'Поддержка клиентов' }
    ]
  },
  services: [
    {
      icon: 'Home',
      title: 'Установка окон',
      description: 'Профессиональная установка пластиковых окон',
      link: '/gallery'
    },
    {
      icon: 'Wrench',
      title: 'Замена окон',
      description: 'Быстрая и качественная замена старых окон на новые'
    },
    {
      icon: 'Settings',
      title: 'Ремонт окон',
      description: 'Замена фурнитуры, изготовление и замена стеклопакетов',
      link: '/window-repair'
    }
  ],
  products: [
    {
      name: 'Эмаль «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Эмалевые краски для внутренних и наружных работ'
    },
    {
      name: 'Грунтовка «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Грунтовка для подготовки поверхностей перед покраской'
    },
    {
      name: 'Пропитка «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Защитная пропитка для деревянных поверхностей'
    },
    {
      name: 'Потолочная краска «Саяночка»',
      price: 'Уточняйте цену',
      description: 'Специальная краска для потолков с высокой укрывистостью'
    }
  ],
  portfolio: [
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
    }
  ],
  faqs: [
    {
      question: 'Сколько времени занимает установка одного окна?',
      answer: 'В среднем установка одного стандартного окна занимает 2-3 часа с учетом подготовки и уборки.'
    },
    {
      question: 'Какие краски вы используете?',
      answer: 'Мы работаем только с профессиональными красками для ПВХ и дерева ведущих европейских производителей.'
    },
    {
      question: 'Сколько стоит выезд на замер?',
      answer: 'Выезд замерщика по городу — 200 рублей, загород — от 500 рублей.'
    }
  ],
  about: {
    title: 'О нас',
    mission: 'Наша основная миссия заключается в том, чтобы создавать комфортные и безопасные условия для работы реализуя проекты как для частных клиентов, так и для муниципальных учреждений.',
    sections: [
      {
        title: 'Наши услуги',
        content: 'Мы работаем с:',
        items: [
          'Частными клиентами: Предлагаем индивидуальные решения, которые соответствуют уникальным потребностям и требованиям каждого заказчика.',
          'Муниципальными учреждениями: Сотрудничаем с образовательными, медицинскими и культурными учреждениями, предоставляя качественные услуги и товары, соответствующие современным стандартам.',
          'Организациями: Обеспечиваем предприятия всем необходимым для эффективного и безопасного функционирования.'
        ]
      }
    ],
    values: [
      {
        icon: 'Users',
        title: 'Профессионализм',
        description: 'Опытные специалисты с квалифицированной поддержкой'
      },
      {
        icon: 'Heart',
        title: 'Индивидуальный подход',
        description: 'Учитываем все пожелания и предложения клиентов'
      },
      {
        icon: 'ShieldCheck',
        title: 'Надежность',
        description: 'Строгий контроль качества каждого проекта'
      }
    ]
  },
  contacts: {
    phones: [
      { number: '+7 950 130 7721', label: 'Ремонт и строительство' },
      { number: '8 (902) 145-49-42', label: 'Офис' },
      { number: '8 (908) 654-95-25', label: 'Директор' }
    ],
    emails: ['ooo-eridan_1@mail.ru', 'steklo_master38@mail.ru'],
    address: {
      region: 'Иркутская область',
      city: 'г. Саянск',
      street: 'мкр Олимпийский, дом 18'
    },
    workingHours: 'Пн-Пт: 9:00 - 17:00'
  }
};

const SiteContentManager = () => {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    const stored = localStorage.getItem('site_content');
    if (stored) {
      setContent(JSON.parse(stored));
    }
  }, []);

  const saveContent = () => {
    localStorage.setItem('site_content', JSON.stringify(content));
    alert('✅ Изменения сохранены!');
  };

  const resetToDefault = () => {
    if (confirm('Сбросить все настройки к начальным значениям?')) {
      setContent(defaultContent);
      localStorage.setItem('site_content', JSON.stringify(defaultContent));
      alert('✅ Настройки сброшены!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Управление контентом сайта</h2>
          <p className="text-muted-foreground">Редактируйте все тексты и настройки главной страницы</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={resetToDefault} variant="outline">
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Сбросить
          </Button>
          <Button onClick={saveContent}>
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить изменения
          </Button>
        </div>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="hero">Главный экран</TabsTrigger>
          <TabsTrigger value="services">Услуги</TabsTrigger>
          <TabsTrigger value="about">О нас</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contacts">Контакты</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Главный баннер</CardTitle>
              <CardDescription>Редактирование текстов и изображения на главном экране</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Заголовок</Label>
                <Input
                  value={content.hero.title}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
                />
              </div>
              <div>
                <Label>Подзаголовок</Label>
                <Input
                  value={content.hero.subtitle}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })}
                />
              </div>
              <div>
                <Label>Описание</Label>
                <Textarea
                  value={content.hero.description}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, description: e.target.value } })}
                />
              </div>
              <div>
                <Label>URL фонового изображения</Label>
                <Input
                  value={content.hero.backgroundImage}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, backgroundImage: e.target.value } })}
                />
              </div>
              <div className="space-y-3">
                <Label>Статистика</Label>
                {content.hero.stats.map((stat, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="Значение"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...content.hero.stats];
                        newStats[index].value = e.target.value;
                        setContent({ ...content, hero: { ...content.hero, stats: newStats } });
                      }}
                    />
                    <Input
                      placeholder="Описание"
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...content.hero.stats];
                        newStats[index].label = e.target.value;
                        setContent({ ...content, hero: { ...content.hero, stats: newStats } });
                      }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          {content.services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Услуга {index + 1}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Название</Label>
                  <Input
                    value={service.title}
                    onChange={(e) => {
                      const newServices = [...content.services];
                      newServices[index].title = e.target.value;
                      setContent({ ...content, services: newServices });
                    }}
                  />
                </div>
                <div>
                  <Label>Описание</Label>
                  <Textarea
                    value={service.description}
                    onChange={(e) => {
                      const newServices = [...content.services];
                      newServices[index].description = e.target.value;
                      setContent({ ...content, services: newServices });
                    }}
                  />
                </div>
                <div>
                  <Label>Ссылка (необязательно)</Label>
                  <Input
                    value={service.link || ''}
                    onChange={(e) => {
                      const newServices = [...content.services];
                      newServices[index].link = e.target.value;
                      setContent({ ...content, services: newServices });
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>О компании</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Заголовок</Label>
                <Input
                  value={content.about.title}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                />
              </div>
              <div>
                <Label>Миссия компании</Label>
                <Textarea
                  value={content.about.mission}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, mission: e.target.value } })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ценности компании</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.about.values.map((value, index) => (
                <div key={index} className="border rounded p-4 space-y-3">
                  <div>
                    <Label>Название {index + 1}</Label>
                    <Input
                      value={value.title}
                      onChange={(e) => {
                        const newValues = [...content.about.values];
                        newValues[index].title = e.target.value;
                        setContent({ ...content, about: { ...content.about, values: newValues } });
                      }}
                    />
                  </div>
                  <div>
                    <Label>Описание</Label>
                    <Textarea
                      value={value.description}
                      onChange={(e) => {
                        const newValues = [...content.about.values];
                        newValues[index].description = e.target.value;
                        setContent({ ...content, about: { ...content.about, values: newValues } });
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Частые вопросы</h3>
            <Button
              onClick={() => {
                setContent({
                  ...content,
                  faqs: [...content.faqs, { question: 'Новый вопрос', answer: 'Ответ на вопрос' }]
                });
              }}
              size="sm"
            >
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить вопрос
            </Button>
          </div>
          {content.faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Вопрос {index + 1}</CardTitle>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      const newFaqs = content.faqs.filter((_, i) => i !== index);
                      setContent({ ...content, faqs: newFaqs });
                    }}
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Вопрос</Label>
                  <Input
                    value={faq.question}
                    onChange={(e) => {
                      const newFaqs = [...content.faqs];
                      newFaqs[index].question = e.target.value;
                      setContent({ ...content, faqs: newFaqs });
                    }}
                  />
                </div>
                <div>
                  <Label>Ответ</Label>
                  <Textarea
                    value={faq.answer}
                    onChange={(e) => {
                      const newFaqs = [...content.faqs];
                      newFaqs[index].answer = e.target.value;
                      setContent({ ...content, faqs: newFaqs });
                    }}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="contacts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Телефоны</Label>
                {content.contacts.phones.map((phone, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="Номер"
                      value={phone.number}
                      onChange={(e) => {
                        const newPhones = [...content.contacts.phones];
                        newPhones[index].number = e.target.value;
                        setContent({ ...content, contacts: { ...content.contacts, phones: newPhones } });
                      }}
                    />
                    <Input
                      placeholder="Описание"
                      value={phone.label}
                      onChange={(e) => {
                        const newPhones = [...content.contacts.phones];
                        newPhones[index].label = e.target.value;
                        setContent({ ...content, contacts: { ...content.contacts, phones: newPhones } });
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <Label>Режим работы</Label>
                <Input
                  value={content.contacts.workingHours}
                  onChange={(e) => setContent({ ...content, contacts: { ...content.contacts, workingHours: e.target.value } })}
                />
              </div>

              <div>
                <Label>Регион</Label>
                <Input
                  value={content.contacts.address.region}
                  onChange={(e) => setContent({ 
                    ...content, 
                    contacts: { 
                      ...content.contacts, 
                      address: { ...content.contacts.address, region: e.target.value } 
                    } 
                  })}
                />
              </div>

              <div>
                <Label>Город</Label>
                <Input
                  value={content.contacts.address.city}
                  onChange={(e) => setContent({ 
                    ...content, 
                    contacts: { 
                      ...content.contacts, 
                      address: { ...content.contacts.address, city: e.target.value } 
                    } 
                  })}
                />
              </div>

              <div>
                <Label>Улица и дом</Label>
                <Input
                  value={content.contacts.address.street}
                  onChange={(e) => setContent({ 
                    ...content, 
                    contacts: { 
                      ...content.contacts, 
                      address: { ...content.contacts.address, street: e.target.value } 
                    } 
                  })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteContentManager;
