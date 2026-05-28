export default function BrochureDesign() {
  const backCards = [
    {
      title: 'Локації',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
      text: `• Головна сцена\n• Фудзона\n• Арт-зона\n• Фотозона`,
    },
    {
      title: 'Партнери',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      text: `• Учнівська рада\n• Волонтери\n• Батьківський комітет`,
    },
    {
      title: 'Контакти',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      text: `Школа №21\nInstagram: @school_fair\n+380 00 000 00 00`,
    },
  ]

  return (
    <div className="min-h-screen bg-[#e9edf3] p-10 flex flex-col gap-12">
      {/* FRONT */}
      <div className="w-[1200px] aspect-[1.414/1] mx-auto rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-3 bg-white">
        {/* LEFT */}
        <div className="relative bg-[#111827] text-white p-10 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-pink-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-pink-500/20 to-transparent" />

          <div className="relative z-10 mt-6 flex flex-col items-center text-center px-4">
            <div className="uppercase tracking-[0.4em] text-sm text-pink-300 mb-6">
              Благодійний Захід
            </div>

            <h1 className="text-6xl font-black leading-[0.95] mb-8 max-w-[320px]">
              Шкільний
              <br />
              Ярмарок
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed max-w-[320px]">
              Благодійний ярмарок зі смаколиками, музикою та творчими активностями.
            </p>
          </div>

          <div className="relative z-10 rounded-[30px] overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop"
              alt="Благодійний ярмарок"
              className="w-full h-[260px] object-cover"
            />
          </div>

          <div className="relative z-10 flex justify-between items-center pt-6 text-lg font-semibold text-pink-200">
            <span>31 ТРАВНЯ</span>
            <span>10:00</span>
          </div>
        </div>

        {/* CENTER */}
        <div className="bg-[#f7f8fc] p-10 flex flex-col justify-between border-x border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-3 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-[0.3em] mb-8">
              Програма
            </div>

            <h2 className="text-6xl font-black text-neutral-900 mb-10 leading-none">
              Розклад
              <br />
              Заходу
            </h2>

            <div className="space-y-5">
              {[
                ['10:00', 'Відкриття ярмарку'],
                ['11:00', 'Творчі майстер-класи'],
                ['12:30', 'Фудкорт та смаколики'],
                ['14:00', 'Благодійний аукціон'],
                ['15:00', 'Музичний виступ'],
              ].map(([time, item]) => (
                <div
                  key={time}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-200 flex items-start gap-5"
                >
                  <div className="text-pink-500 font-black text-xl min-w-[90px]">
                    {time}
                  </div>
                  <div className="text-lg font-semibold text-neutral-700">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative bg-gradient-to-br from-pink-500 via-fuchsia-500 to-indigo-600 p-10 text-white flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_left,white,transparent_45%)]" />

          <div className="relative z-10">
            <div className="uppercase tracking-[0.4em] text-sm text-pink-100 mb-8">
              Активності
            </div>

            <h2 className="text-6xl font-black leading-none mb-10">
              Зони
              <br />
              Розваг
            </h2>

            <div className="grid gap-5">
              {[
                '🎨 Арт-зона',
                '📸 Фотозона',
                '🎵 Жива музика',
                '🍰 Фудкорт',
                '🎁 Лотерея',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/15 backdrop-blur-lg rounded-3xl px-6 py-5 border border-white/10 text-xl font-semibold shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="w-[1200px] aspect-[1.414/1] mx-auto rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-3 bg-[#ffffff]">
        {backCards.map((card) => (
          <div
            key={card.title}
            className="relative p-8 flex flex-col justify-between border-r border-neutral-200 last:border-none bg-[#fafafa]"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-indigo-500" />

            <div className="rounded-[30px] overflow-hidden shadow-xl">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[240px] object-cover"
              />
            </div>

            <div>
              <div className="uppercase tracking-[0.4em] text-sm text-pink-500 mb-5 font-bold">
                Інформація
              </div>

              <h3 className="text-5xl font-black text-neutral-900 mb-8 leading-none">
                {card.title}
              </h3>

              <div className="whitespace-pre-line text-lg leading-relaxed text-neutral-700 font-medium space-y-6">
                {card.title === 'Локації' && (
                  <div className="space-y-5 mt-6">
                    {[
                      ['🎭', 'Головна сцена', 'Концерти та офіційне відкриття ярмарку'],
                      ['🍔', 'Фудзона', 'Смачна їжа та напої для гостей'],
                      ['🎨', 'Арт-зона', 'Творчі майстер-класи та виставки'],
                      ['📸', 'Фотозона', 'Яскраві фото та незабутні спогади'],
                    ].map(([icon, title, desc]) => (
                      <div key={title} className="flex gap-4 items-start border-b border-pink-100 pb-4">
                        <div className="text-3xl">{icon}</div>
                        <div>
                          <div className="font-black text-xl text-neutral-900">{title}</div>
                          <div className="text-base text-neutral-600 leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {card.title === 'Партнери' && (
                  <div className="space-y-5 mt-6">
                    {[
                      ['👥', 'Учнівська рада', 'Організація та координація заходу'],
                      ['💜', 'Волонтери', 'Допомога та підтримка гостей'],
                      ['🤝', 'Батьківський комітет', 'Підтримка розвитку шкільної спільноти'],
                    ].map(([icon, title, desc]) => (
                      <div key={title} className="flex gap-4 items-start border-b border-pink-100 pb-4">
                        <div className="text-3xl">{icon}</div>
                        <div>
                          <div className="font-black text-xl text-neutral-900">{title}</div>
                          <div className="text-base text-neutral-600 leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 rounded-3xl bg-gradient-to-r from-pink-100 to-indigo-100 p-5 flex items-center gap-4">
                      <div className="text-5xl">✨</div>
                      <div className="text-lg font-bold text-neutral-800 leading-relaxed">
                        Разом ми створюємо дружню та сильну шкільну спільноту!
                      </div>
                    </div>
                  </div>
                )}

                {card.title === 'Контакти' && (
                  <div className="space-y-5 mt-6">
                    {[
                      ['🏫', 'Школа №21', 'Наша адреса та місце проведення'],
                      ['📱', 'Instagram: @school_fair', 'Підписуйся та будь у курсі'],
                      ['📞', '+380 00 000 00 00', 'Телефон для довідок'],
                    ].map(([icon, title, desc]) => (
                      <div key={title} className="flex gap-4 items-start border-b border-pink-100 pb-4">
                        <div className="text-3xl">{icon}</div>
                        <div>
                          <div className="font-black text-xl text-neutral-900">{title}</div>
                          <div className="text-base text-neutral-600 leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 rounded-3xl bg-gradient-to-r from-pink-100 to-purple-100 p-5 flex items-center gap-4">
                      <div className="text-5xl">📢</div>
                      <div className="text-lg font-bold text-neutral-800 leading-relaxed">
                        Чекаємо вас на нашому благодійному ярмарку!
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
