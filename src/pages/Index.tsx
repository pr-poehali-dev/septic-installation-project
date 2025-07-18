import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">СептикМонтаж</span>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Phone" className="h-5 w-5 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">+7 (900) 929-60-19</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Монтаж септика из ЖБ-кольца
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Быстро, надежно, доступно! Установка за 1 день
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Бесплатная консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Septic Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что такое септик из ЖБ-кольца?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Автономная система канализации из железобетонных колец — это надежное и долговечное решение для частных домов и дач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Принцип работы</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Icon name="Droplets" className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Отстаивание</h4>
                      <p className="text-gray-600">Тяжелые частицы оседают на дно</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Icon name="Recycle" className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Биологическая очистка</h4>
                      <p className="text-gray-600">Бактерии разлагают органические вещества</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Icon name="Filter" className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Фильтрация</h4>
                      <p className="text-gray-600">Очищенная вода поступает в грунт</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <Icon name="Building" className="h-32 w-32 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Конструкция септика</h3>
                <p className="text-gray-600">Железобетонные кольца обеспечивают максимальную прочность и долговечность системы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают именно нас?
            </h2>
            <p className="text-lg text-gray-600">
              Мы предлагаем комплексное решение с гарантией качества
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Быстрая установка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Монтаж септика за один рабочий день. Минимум неудобств для вашей семьи.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Icon name="Award" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Качественные материалы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Используем только сертифицированные ЖБ-кольца от проверенных производителей.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Предоставляем гарантию на все виды работ. Бесплатная консультация.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Wallet" className="h-6 w-6 text-blue-600" />
                  <CardTitle>Доступные цены</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Конкурентные цены на рынке. Гибкая система скидок и акций для постоянных клиентов.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="h-6 w-6 text-blue-600" />
                  <CardTitle>Бесплатная консультация</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Наши специалисты помогут выбрать оптимальное решение для вашего участка.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Этапы монтажа септика
            </h2>
            <p className="text-lg text-gray-600">
              Подробный процесс установки от подготовки до сдачи объекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Подготовка котлована",
                description: "Выкапываем котлован нужного размера с учетом всех требований",
                icon: "Shovel"
              },
              {
                step: 2,
                title: "Установка колец",
                description: "Устанавливаем ЖБ-кольца и герметизируем стыки",
                icon: "Settings"
              },
              {
                step: 3,
                title: "Подключение труб",
                description: "Подключаем входную и выходную трубы к системе",
                icon: "Pipe"
              },
              {
                step: 4,
                title: "Засыпка и тестирование",
                description: "Засыпаем септик, проводим тестирование системы",
                icon: "CheckCircle"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold absolute -top-4 -right-4">
                    {step.step}
                  </div>
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Icon name={step.icon as any} className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-lg text-gray-600">
              Более 200 довольных клиентов уже оценили качество нашей работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Петров",
                location: "Дача в Подмосковье",
                rating: 5,
                review: "Отличная работа! Установили септик за день, как и обещали. Качество на высоте, цена приемлемая. Рекомендую!"
              },
              {
                name: "Мария Сидорова",
                location: "Частный дом в Тульской области",
                rating: 5,
                review: "Очень довольна результатом. Ребята профессионалы своего дела. Всё объяснили, показали. Работает отлично!"
              },
              {
                name: "Игорь Кузнецов",
                location: "Коттедж в Калужской области",
                rating: 5,
                review: "Быстро, качественно, недорого. Консультация действительно бесплатная. Советую всем соседям!"
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Получите бесплатную консультацию
            </h2>
            <p className="text-lg opacity-90">
              Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 text-gray-900">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (900) 929-60-19" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                Получить консультацию
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">СептикМонтаж</span>
              </div>
              <p className="text-gray-400">
                Профессиональный монтаж септиков из ЖБ-колец. Быстро, надежно, с гарантией качества.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-blue-400" />
                  <span>+7 (900) 929-60-19</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-blue-400" />
                  <span>info@septik-montazh.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" className="h-5 w-5 text-blue-400" />
                  <span>Telegram, WhatsApp</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Монтаж септиков</li>
                <li>Консультации</li>
                <li>Обслуживание</li>
                <li>Гарантийное обслуживание</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 СептикМонтаж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;