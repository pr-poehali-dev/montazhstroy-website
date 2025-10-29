import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const projects = [
    {
      id: 1,
      title: "ЖК «Премиум Парк»",
      category: "Жилое строительство",
      image: "https://cdn.poehali.dev/projects/c5f60bf8-138d-4d1a-be0d-e1648ee9891a/files/e4685379-9e2f-4b05-a010-32bdd5888c1f.jpg",
      area: "15,000 м²"
    },
    {
      id: 2,
      title: "БЦ «Столичный»",
      category: "Коммерческое строительство",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      area: "8,500 м²"
    },
    {
      id: 3,
      title: "ТЦ «Европа»",
      category: "Торговые комплексы",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      area: "12,000 м²"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Александр Петров",
      company: "ГК «Развитие»",
      text: "Работали с МонтажСтрой над крупным жилым комплексом. Профессионализм на высоте, сроки соблюдены, качество отличное.",
      rating: 5
    },
    {
      id: 2,
      name: "Елена Соколова",
      company: "Империя Строй",
      text: "Команда справилась с нестандартными задачами. Отдельное спасибо за оперативность и внимание к деталям.",
      rating: 5
    },
    {
      id: 3,
      name: "Дмитрий Волков",
      company: "СтройИнвест",
      text: "Рекомендую! Надежный партнер, современное оборудование, квалифицированные специалисты.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-accent">МонтажСтрой</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Строим <span className="text-primary">будущее</span> с вами
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Полный цикл строительных работ от проектирования до сдачи объекта. 
                Современные технологии, надежность и качество с 2005 года.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Наши проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center animate-scale-in">
                  <div className="text-4xl font-bold text-primary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  <div className="text-4xl font-bold text-secondary mb-2">18</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Качество</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Строительство"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "Award", title: "Лицензии и сертификаты", text: "Все необходимые разрешения" },
              { icon: "Shield", title: "Гарантия качества", text: "До 5 лет на все виды работ" },
              { icon: "Clock", title: "Соблюдение сроков", text: "Четкий график выполнения" },
              { icon: "Users", title: "Опытная команда", text: "Более 200 специалистов" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <div className="bg-primary rounded-full p-4">
                    <Icon name={item.icon} size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Реализованные объекты, которыми мы гордимся</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.area}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-secondary font-semibold mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
                alt="О компании"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">МонтажСтрой</strong> — ведущая строительная компания с 18-летним опытом работы на рынке. 
                Мы специализируемся на комплексном строительстве жилых, коммерческих и промышленных объектов.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша команда из более чем 200 квалифицированных специалистов использует передовые технологии 
                и современное оборудование для реализации проектов любой сложности.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Target", text: "Индивидуальный подход" },
                  { icon: "CheckCircle", text: "Прозрачность работы" },
                  { icon: "TrendingUp", text: "Конкурентные цены" },
                  { icon: "HeartHandshake", text: "Долгосрочное партнерство" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name={item.icon} className="text-primary" size={24} />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют ведущие компании</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-lg">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-lg">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 rounded-full p-3">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-lg">info@montazhstroy.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 rounded-full p-3">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-lg">г. Москва, ул. Строителей, д. 15</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} className="text-primary" />
                <span className="text-xl font-bold">МонтажСтрой</span>
              </div>
              <p className="text-white/70">
                Профессиональное строительство с 2005 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Жилое строительство</li>
                <li>Коммерческие объекты</li>
                <li>Промышленные комплексы</li>
                <li>Реконструкция</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 hover:bg-primary transition-colors rounded-full p-2">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-primary transition-colors rounded-full p-2">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-primary transition-colors rounded-full p-2">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            © 2024 МонтажСтрой. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
