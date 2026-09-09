const keyData = [
  {
    id: 1,
    imgSrc:
      'https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Atendimento Inclusivo',
    title: 'Atendimento Inclusivo',
    description:
      'Espaço preparado para receber pessoas com deficiência visual e auditiva, garantindo acessibilidade e acolhimento em cada aula.',
  },
  {
    id: 2,
    imgSrc:
      'https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Gestantes',
    title: 'Gestantes',
    description:
      'Professores especializados em Pilates para gestantes, oferecendo segurança, bem-estar e acompanhamento personalizado durante toda a gestação.',
  },
  {
    id: 3,
    imgSrc:
      'https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Idosos',
    title: 'Idosos',
    description:
      'Programas focados no resgate motor e cognitivo, promovendo autonomia, equilíbrio e qualidade de vida na melhor idade.',
  },
  {
    id: 4,
    imgSrc:
      'https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Localização Prática',
    title: 'Localização Prática',
    description:
      'Portaria 24h e ponto de ônibus em frente ao Studio, facilitando o acesso com segurança e comodidade.',
  },
]

const Key = () => {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-10 md:mb-14">
        <h2 className="text-marrome font-black text-2xl md:text-4xl mb-3">
          Seu bem-estar em boas mãos
        </h2>
        <p className="text-preto/80 text-sm font-medium md:text-lg max-w-xl">
          Do atendimento inclusivo ao acompanhamento especializado, tudo para
          você se sentir seguro e confiante.
        </p>
      </div>

      <aside className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {keyData.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            <div className="w-full max-w-[200px] sm:max-w-[220px] aspect-square rounded-2xl overflow-hidden shadow-md mb-4 bg-gray-200">
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
            <h3 className="text-marrome font-extrabold text-base md:text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-preto/80 text-xs sm:text-sm  font-medium leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </aside>
    </section>
  )
}

export default Key
