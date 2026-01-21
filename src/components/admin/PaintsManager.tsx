import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Paint {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
}

const PaintsManager = () => {
  const [paints, setPaints] = useState<Paint[]>([]);
  const [newPaint, setNewPaint] = useState({ name: '', category: 'enamel', price: '', description: '' });
  const [editingId, setEditingId] = useState<string | null>(null);

  const categories = [
    { id: 'enamel', name: 'Эмали' },
    { id: 'primer', name: 'Грунтовки' },
    { id: 'impregnation', name: 'Пропитки' },
    { id: 'ceiling', name: 'Для потолков' }
  ];

  useEffect(() => {
    const storedPaints = localStorage.getItem('paints_catalog');
    if (storedPaints) {
      setPaints(JSON.parse(storedPaints));
    }
  }, []);

  const savePaints = (updatedPaints: Paint[]) => {
    setPaints(updatedPaints);
    localStorage.setItem('paints_catalog', JSON.stringify(updatedPaints));
  };

  const handleAdd = () => {
    if (!newPaint.name || !newPaint.price) {
      alert('Заполните название и цену');
      return;
    }

    const paint: Paint = {
      id: Date.now().toString(),
      ...newPaint
    };

    savePaints([...paints, paint]);
    setNewPaint({ name: '', category: 'enamel', price: '', description: '' });
  };

  const handleEdit = (paint: Paint) => {
    setEditingId(paint.id);
    setNewPaint({
      name: paint.name,
      category: paint.category,
      price: paint.price,
      description: paint.description
    });
  };

  const handleUpdate = () => {
    if (!editingId) return;

    const updatedPaints = paints.map(paint =>
      paint.id === editingId
        ? { ...paint, ...newPaint }
        : paint
    );

    savePaints(updatedPaints);
    setEditingId(null);
    setNewPaint({ name: '', category: 'enamel', price: '', description: '' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Удалить товар?')) {
      savePaints(paints.filter(paint => paint.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? 'Редактировать товар' : 'Добавить новый товар'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Название"
            value={newPaint.name}
            onChange={(e) => setNewPaint({ ...newPaint, name: e.target.value })}
          />
          <Select value={newPaint.category} onValueChange={(value) => setNewPaint({ ...newPaint, category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="Цена (только число, без ₽)"
            type="number"
            value={newPaint.price}
            onChange={(e) => setNewPaint({ ...newPaint, price: e.target.value })}
          />
          <Textarea
            placeholder="Описание"
            value={newPaint.description}
            onChange={(e) => setNewPaint({ ...newPaint, description: e.target.value })}
          />
          <div className="flex gap-2">
            {editingId ? (
              <>
                <Button onClick={handleUpdate} className="flex-1">
                  <Icon name="Save" size={18} className="mr-2" />
                  Сохранить
                </Button>
                <Button variant="outline" onClick={() => {
                  setEditingId(null);
                  setNewPaint({ name: '', category: 'enamel', price: '', description: '' });
                }}>
                  Отмена
                </Button>
              </>
            ) : (
              <Button onClick={handleAdd} className="w-full">
                <Icon name="Plus" size={18} className="mr-2" />
                Добавить товар
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paints.map((paint) => {
          const category = categories.find(c => c.id === paint.category);
          return (
            <Card key={paint.id}>
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {category?.name}
                  </span>
                </div>
                <h3 className="font-bold mb-2">{paint.name}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{paint.price} ₽</div>
                <p className="text-sm text-muted-foreground mb-4">{paint.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(paint)}>
                    <Icon name="Edit" size={16} className="mr-2" />
                    Изменить
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(paint.id)}>
                    <Icon name="Trash2" size={16} className="mr-2" />
                    Удалить
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {paints.length === 0 && (
        <Card className="p-8 text-center">
          <Icon name="PackageX" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Нет товаров. Добавьте первый!</p>
        </Card>
      )}
    </div>
  );
};

export default PaintsManager;
