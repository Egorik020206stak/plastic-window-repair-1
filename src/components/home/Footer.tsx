import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
