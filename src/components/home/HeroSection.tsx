import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onMeasurementClick: () => void;
}

const HeroSection = ({ onMeasurementClick }: HeroSectionProps) => {
  return (
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
              onClick={onMeasurementClick}
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
  );
};

export default HeroSection;
