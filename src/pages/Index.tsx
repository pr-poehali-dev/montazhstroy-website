import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "Building2",
      title: "Жилые комплексы",
      description: "Строительство многоквартирных домов и коттеджных поселков под ключ"
    },
    {
      icon: "Store",
      title: "Коммерческие здания",
      description: "Торговые центры, офисные здания, бизнес-центры любой сложности"
    },
    {
      icon: "Factory",
      title: "Промышленные объекты",
      description: "Складские комплексы, производственные цеха, логистические центры"
    },
    {
      icon: "Hammer",
      title: "Реконструкция",
      description: "Капитальный ремонт и модернизация существующих зданий"
    },
    {
      icon: "Wrench",
      title: "Монтажные работы",
      description: "Установка конструкций, инженерных систем, коммуникаций"
    },
    {
      icon: "ClipboardCheck",
      title: "Проектирование",
      description: "Разработка проектной документации и дизайн-проектов"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "ЖК «Солнечный»",
      category: "Жилое строительство",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      location: "Москва",
      description: "Современный жилой комплекс на 450 квартир"
    },
    {
      id: 2,
      title: "ТЦ «Европа»",
      category: "Коммерческое строительство",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      location: "Санкт-Петербург",
      description: "Торговый центр площадью 25 000 м²"
    },
    {
      id: 3,
      title: "Складской комплекс",
      category: "Промышленное строительство",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
      location: "Московская область",
      description: "Логистический центр класса А"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Construction" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-accent">МонтажСтрой</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Строим будущее<br />
                <span className="text-primary">вместе с вами</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное строительство и монтаж любой сложности. 
                20+ лет опыта, 500+ реализованных проектов.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop" 
                alt="Строительство"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg">лет опыта</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg">проектов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg">специалистов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg">довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр строительно-монтажных работ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={service.icon} className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Реализованные проекты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наши лучшие работы за последние годы
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    {project.location}
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="О компании"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">О компании МонтажСтрой</h2>
              <p className="text-lg text-muted-foreground">
                Более 20 лет мы создаем надежные и современные объекты по всей России. 
                Наша команда — это профессионалы с огромным опытом в строительстве и монтаже.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Современные технологии</h4>
                    <p className="text-muted-foreground">Используем передовое оборудование и методы строительства</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Соблюдение сроков</h4>
                    <p className="text-muted-foreground">Гарантируем выполнение работ точно в срок</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Полная гарантия</h4>
                    <p className="text-muted-foreground">5 лет гарантии на все виды работ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Оставьте заявку и получите бесплатную консультацию
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@montazhstroy.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Строительная, д. 15
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Время работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 animate-scale-in">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Опишите ваш проект"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Construction" size={28} />
                <span className="text-xl font-bold">МонтажСтрой</span>
              </div>
              <p className="text-white/70">
                Строим будущее вместе с вами уже более 20 лет
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Жилые комплексы</li>
                <li>Коммерческие здания</li>
                <li>Промышленные объекты</li>
                <li>Реконструкция</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@montazhstroy.ru</li>
                <li>г. Москва, ул. Строительная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            © 2024 МонтажСтрой. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
