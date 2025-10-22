import Head from 'next/head';
import SimpleHeader from '../../components/simpleHeader';

export default function Instructions() {
  return (
    <>
      <Head>
        <title>Инструкции за настаняване - Downtown Apartment</title>
        <meta name="description" content="Инструкции за настаняване в Downtown Apartment 'By the Lindens'" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-gray-100 min-h-screen">
        <SimpleHeader />
        
        {/* Instructions Content */}
        <section className="pt-20 pb-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Инструкции за настаняване</h2>
            <div className="space-y-6">
              
              {/* Address Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">1. Адрес и местоположение</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Точен адрес:</strong> ж.к. Изток, ул. "Търговска" 34, 8600 Ямбол, вход Д, втори етаж, апартамент 84
                  </p>
                  <p className="text-gray-700 mb-4">
                    Можете да намерите апартамента в Google Maps, като търсите <strong>"Downtown Apartment 'By the Lindens'"</strong> - ще ви отведе до паркинг зад блока. Вторият вход води към паркинг в задната част на сградата.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/nTzbcZLWUiTnJjao6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Упътване в Google Maps
                  </a>
                </div>
              </div>

              {/* Entrances Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">2. Входове и ключове</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Главен вход (ул. "Търговска")</h4>
                    <div className="mb-4">
                      <img 
                        src="/entrance1.jpg" 
                        alt="Главен вход на ул. Търговска" 
                        className="w-full max-w-md mx-auto rounded-lg shadow-md"
                      />
                    </div>
                    <p className="text-gray-700 mb-4">
                      Главният вход се намира на улица "Търговска", която е пешеходна зона.
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/zRD2bcHYKdjTuThK9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Упътване в Google Maps
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Втори вход (паркинг)</h4>
                    <p className="text-gray-700">
                      Вторият вход води към паркинг в задната част на сградата.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Важно:</strong> И двата входа са заключени, и ще получите ключове както за сградата, така и за апартамента.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parking Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">3. Паркиране</h3>
                <div className="space-y-4">
                  <div className="mb-4">
                    <img 
                      src="/blue_zone.jpg" 
                      alt="Табелка за синя зона" 
                      className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  <p className="text-gray-700">
                    <strong>Паркиране в синя зона:</strong> В работно време (8:00 - 18:00) е задължително паркиране в синя зона с SMS самотаксуване.
                  </p>
                  <p className="text-gray-700">
                    <strong>SMS самотаксуване:</strong> Изпратете кратко текстово съобщение (SMS) на номер <strong>1346</strong> със съдържание държавния контролен номер на автомобила изписан на латиница.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Важно:</strong> Синята зона е активна само в работно време от 8:00 до 18:00 часа в работни дни.
                    </p>
                  </div>
                </div>
              </div>

              {/* Self Check-in Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">4. Самостоятелно настаняване</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Сейф за ключове:</strong> На парапета в дясно от главния вход ще намерите закачен сейф за ключове.
                  </p>
                  <p className="text-gray-700">
                    <strong>Код за сейфа:</strong> Ще получите кода в деня на настаняване около 14 часа.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-gray-700">
                      <strong>Важно:</strong> Моля, след като вземете ключовете, затворете сейфа и разбъркайте кода.
                    </p>
                  </div>
                </div>
              </div>

              {/* Registration Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">5. Регистрация на гости</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Задължителна регистрация:</strong> Задължени сме по закон да регистрираме всички гости.
                  </p>
                  <p className="text-gray-700">
                    Можете да изпратите три имена и дата на раждане или да попълните адресните карти в апартамента.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-md">
                    <p className="text-gray-700 mb-2">
                      <strong>Онлайн регистрация:</strong> Можете да попълните онлайн формуляра тук:
                    </p>
                    <a 
                      href="https://forms.gle/ief6EX7irqQDSDAw8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Попълни онлайн формуляр
                    </a>
                  </div>
                </div>
              </div>

              {/* Arrival Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">6. Час на пристигане</h3>
                <p className="text-gray-700">
                  За да осигурим безпроблемно настаняване, моля, уведомете ни за очаквания час на пристигане. 
                  Това ще ни помогне да организираме срещата Ви в апартамента или да Ви предоставим инструкции за самостоятелно настаняване.
                </p>
              </div>

              {/* Checkout Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">7. При напускане</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Освобождаване на апартамента:</strong> До 11 часа, за да можем да го подготвим за следващите гости.
                  </p>
                  <p className="text-gray-700">
                    В деня на напускане можете да оставите ключа в сейфа за ключове.
                  </p>
                </div>
              </div>

              {/* Review Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">8. Оставете ревю</h3>
                <p className="text-gray-700 mb-4">
                  Ще сме Ви благодарни да ни оставите ревю в Google:
                </p>
                <a 
                  href="https://g.page/r/CY9nR2i9l8TNEBM/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Остави ревю в Google
                </a>
              </div>

              {/* Contact Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Нужда от помощ?</h3>
                <p className="text-gray-700">
                  Ако имате въпроси или нужда от помощ, не се колебайте да се свържете с нас.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
