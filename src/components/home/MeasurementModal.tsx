import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeasurementModal = ({ isOpen, onClose }: MeasurementModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <Card className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl mb-2">Заказать замер</CardTitle>
              <CardDescription>Свяжитесь с нами для замера окон</CardDescription>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
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
  );
};

export default MeasurementModal;
