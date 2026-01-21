import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Paint {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
}

const PaintsCatalog = () => {
  const [paints, setPaints] = useState<Paint[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const storedPaints = localStorage.getItem('paints_catalog');
    if (storedPaints) {
      setPaints(JSON.parse(storedPaints));
    } else {
      const defaultPaints: Paint[] = [
        {
          id: '1',
          name: 'Эмаль «Саяночка»',
          category: 'enamel',
          price: '450',
          description: 'Эмалевые краски для внутренних и наружных работ'
        },
        {
          id: '2',
          name: 'Грунтовка «Саяночка»',
          category: 'primer',
          price: '320',
          description: 'Грунтовка для подготовки поверхностей перед покраской'
        },
        {
          id: '3',
          name: 'Пропитка «Саяночка»',
          category: 'impregnation',
          price: '380',
          description: 'Защитная пропитка для деревянных поверхностей'
        },
        {
          id: '4',
          name: 'Потолочная краска «Саяночка»',
          category: 'ceiling',
          price: '520',
          description: 'Специальная краска для потолков с высокой укрывистостью'
        }
      ];
      setPaints(defaultPaints);
      localStorage.setItem('paints_catalog', JSON.stringify(defaultPaints));
    }
  }, []);

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'enamel', name: 'Эмали' },
    { id: 'primer', name: 'Грунтовки' },
    { id: 'impregnation', name: 'Пропитки' },
    { id: 'ceiling', name: 'Для потолков' }
  ];

  const filteredPaints = selectedCategory === 'all' 
    ? paints 
    : paints.filter(paint => paint.category === selectedCategory);

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
            <h1 className="text-5xl font-bold mb-4">Каталог красок "Саяночка"</h1>
            <p className="text-xl text-muted-foreground">Профессиональные краски и материалы</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="text-base"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPaints.map(paint => (
              <Card key={paint.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Paintbrush" className="text-primary" size={64} />
                  </div>
                  <CardTitle className="text-xl">{paint.name}</CardTitle>
                  <CardDescription>{paint.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">{paint.price} ₽</div>
                  <Button className="w-full">
                    Заказать
                    <Icon name="ShoppingCart" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPaints.length === 0 && (
            <div className="text-center py-20">
              <Icon name="PackageX" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">В этой категории пока нет товаров</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PaintsCatalog;
