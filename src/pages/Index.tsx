import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      title: 'Промышленные полы',
      description: 'Высокопрочные полимерные покрытия для промышленных и коммерческих объектов',
      image: 'https://cdn.poehali.dev/projects/c9a866e6-82cc-4401-95f0-1cc1e4335300/files/1ab2d323-9d60-4238-bd81-00d3c9172e4a.jpg',
      icon: 'Grid3x3'
    },
    {
      id: 2,
      title: 'Огнезащита',
      description: 'Эффективные системы огнезащиты металлоконструкций и строительных элементов',
      image: 'https://cdn.poehali.dev/projects/c9a866e6-82cc-4401-95f0-1cc1e4335300/files/c2efee85-bb39-4a40-8a1e-d41676d0368e.jpg',
      icon: 'Flame'
    },
    {
      id: 3,
      title: 'Антикоррозийная защита',
      description: 'Надежная защита металлических конструкций от коррозии и агрессивных сред',
      image: 'https://cdn.poehali.dev/projects/c9a866e6-82cc-4401-95f0-1cc1e4335300/files/8cf0094f-5b35-48b1-9c29-d661e7187b6e.jpg',
      icon: 'Shield'
    },
    {
      id: 4,
      title: 'Герметики',
      description: 'Профессиональные герметизирующие материалы для строительства и промышленности',
      image: 'https://cdn.poehali.dev/projects/c9a866e6-82cc-4401-95f0-1cc1e4335300/files/18b91718-825b-4657-87bc-2536c54682aa.jpg',
      icon: 'Droplet'
    },
    {
      id: 5,
      title: 'Гидроизоляция',
      description: 'Современные гидроизоляционные материалы и системы для любых объектов',
      image: 'https://cdn.poehali.dev/projects/c9a866e6-82cc-4401-95f0-1cc1e4335300/files/e5024c32-d66c-4072-a4f0-bc7bd3e13b3e.jpg',
      icon: 'Waves'
    },
    {
      id: 6,
      title: 'Защита бетона',
      description: 'Комплексные решения для защиты и упрочнения бетонных конструкций',
      image: 'https://cdn.poehali.dev/projects/c9a866e6-82cc-4401-95f0-1cc1e4335300/files/b97a039a-3574-4d5e-8374-ad51352651cc.jpg',
      icon: 'Home'
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Качество', text: 'Только сертифицированная продукция' },
    { icon: 'Truck', title: 'Доставка', text: 'Оперативная доставка по всей России' },
    { icon: 'Users', title: 'Опыт', text: 'Более 15 лет на рынке' },
    { icon: 'Shield', title: 'Гарантия', text: 'Официальная гарантия производителя' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">Аврора</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-foreground hover:text-accent transition-colors font-medium">Продукция</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">О компании</a>
              <a href="#advantages" className="text-foreground hover:text-accent transition-colors font-medium">Преимущества</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">Контакты</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">+7 (495) 123-45-67</span>
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 flex flex-col gap-4 animate-fade-in">
              <a href="#products" className="text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Продукция</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>О компании</a>
              <a href="#advantages" className="text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Преимущества</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
              <a href="tel:+74951234567" className="flex items-center gap-2 text-accent">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">+7 (495) 123-45-67</span>
              </a>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Промышленные решения для строительства
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in">
              Полный спектр защитных материалов и покрытий для промышленных и строительных объектов
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                <a href="#contact">Получить консультацию</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
                <a href="#products">Каталог продукции</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр решений для промышленного строительства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                      <Icon name={product.icon as any} size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">О компании Аврора</h2>
              <p className="text-lg text-foreground mb-4">
                Компания «Аврора» специализируется на поставке промышленного оборудования и материалов для строительства.
              </p>
              <p className="text-lg text-foreground mb-4">
                Мы работаем напрямую с ведущими производителями, что позволяет нам предлагать конкурентные цены и гарантировать качество продукции.
              </p>
              <p className="text-lg text-foreground">
                Наши специалисты помогут подобрать оптимальное решение для вашего проекта и обеспечат полное техническое сопровождение.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-foreground">Выполненных проектов</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-foreground">Лет на рынке</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-foreground">Постоянных клиентов</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-foreground">Гарантия качества</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему выбирают нас
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent transition-colors duration-300">
                  <Icon name={advantage.icon as any} size={32} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Связаться с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и наш специалист свяжется с вами в ближайшее время
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" required />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Телефон</h3>
                        <a href="tel:+74951234567" className="text-accent hover:underline">+7 (495) 123-45-67</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:info@aurora-prom.ru" className="text-accent hover:underline">info@aurora-prom.ru</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Адрес</h3>
                        <p className="text-foreground">г. Москва, ул. Промышленная, д. 15</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Аврора</span>
              </div>
              <p className="text-white/80">Промышленные решения для строительства</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">Промышленные полы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Огнезащита</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Антикоррозийная защита</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Герметики</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Гидроизоляция</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Защита бетона</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+74951234567" className="hover:text-accent transition-colors">+7 (495) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@aurora-prom.ru" className="hover:text-accent transition-colors">info@aurora-prom.ru</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Аврора. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;