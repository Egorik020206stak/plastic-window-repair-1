import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface MaterialImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

const Materials = () => {
  const [images, setImages] = useState<MaterialImage[]>([]);

  useEffect(() => {
    const storedImages = localStorage.getItem('materials_images');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    } else {
      const defaultImages: MaterialImage[] = [
        {
          id: '1',
          url: 'https://cdn.poehali.dev/projects/91022207-6de8-4436-b8df-267fcf1224c7/files/55796747-f555-43c5-83af-fe1b84e6f09d.jpg',
          title: 'Краска "Саяночка"',
          description: 'Профессиональные краски для окон и фасадов'
        }
      ];
      setImages(defaultImages);
      localStorage.setItem('materials_images', JSON.stringify(defaultImages));
    }
  }, []);

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
            <h1 className="text-5xl font-bold mb-4">Качественные материалы</h1>
            <p className="text-xl text-muted-foreground">Фотографии наших материалов и красок</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-20">
              <Icon name="ImageOff" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">Пока нет фотографий материалов</p>
              <p className="text-sm text-muted-foreground mt-2">Администратор может добавить их в админ-панели</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Materials;
