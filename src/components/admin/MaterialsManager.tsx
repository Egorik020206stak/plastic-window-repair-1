import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface MaterialImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

const MaterialsManager = () => {
  const [images, setImages] = useState<MaterialImage[]>([]);
  const [newImage, setNewImage] = useState({ url: '', title: '', description: '' });

  useEffect(() => {
    const storedImages = localStorage.getItem('materials_images');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  const saveImages = (updatedImages: MaterialImage[]) => {
    setImages(updatedImages);
    localStorage.setItem('materials_images', JSON.stringify(updatedImages));
  };

  const handleAdd = () => {
    if (!newImage.url || !newImage.title) {
      alert('Заполните URL и название');
      return;
    }

    const image: MaterialImage = {
      id: Date.now().toString(),
      ...newImage
    };

    saveImages([...images, image]);
    setNewImage({ url: '', title: '', description: '' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Удалить фото?')) {
      saveImages(images.filter(img => img.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Добавить фото материала</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="URL изображения"
            value={newImage.url}
            onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
          />
          <Input
            placeholder="Название"
            value={newImage.title}
            onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
          />
          <Textarea
            placeholder="Описание"
            value={newImage.description}
            onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
          />
          <Button onClick={handleAdd} className="w-full">
            <Icon name="Plus" size={18} className="mr-2" />
            Добавить фото
          </Button>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {images.map((image) => (
          <Card key={image.id}>
            <CardContent className="p-4">
              <img src={image.url} alt={image.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold mb-2">{image.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{image.description}</p>
              <Button variant="destructive" size="sm" onClick={() => handleDelete(image.id)}>
                <Icon name="Trash2" size={16} className="mr-2" />
                Удалить
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {images.length === 0 && (
        <Card className="p-8 text-center">
          <Icon name="ImageOff" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Нет фотографий. Добавьте первую!</p>
        </Card>
      )}
    </div>
  );
};

export default MaterialsManager;
