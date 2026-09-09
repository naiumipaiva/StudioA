import { useRef, useEffect } from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

const reviewsData = [
  {
    id: 1,
    text: '"O MELHOR! Ambiente super acolhedor e muito bem equipado! Tudo muito bem cuidado e pensado. Atendimento humanizado e muito profissional. Recomendo pra todo mundo!"',
    author: 'Ana Vaz',
  },
  {
    id: 2,
    text: '“Studio muito bem equipado e com profissional altamente capacitado!! Eu como gestante indico a todas as futuras mamães que querem praticar exercícios durante a gestação! Ambiente acolhedor ❤️👏😍”',
    author: 'Juliana Araujo',
  },
  {
    id: 3,
    text: '"Inicialmente o Studio A Pilates foi procurado para dar tratamento preventivo a problemas de postura, porém, com o tempo, foi se tornando algo mais, transformou-se em local de amizade e empatia. Além de cuidar do corpo, alegra a mente e acalma a alma. Audrey, a professora, é uma menina competente no que pretende entregar profissionalmente, mas vai além, cria um ambiente de interação e alegria. Recomendo."',
    author: 'Wilson Quaresma',
  },
]

const Reviews = () => {
  const scrollContainerRef = useRef(null)

  // Faz o carrossel iniciar centralizando exatamente o segundo card no carregamento mobile
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container && window.innerWidth < 768) {
      const secondCard = container.children[1] // Pega o segundo card (índice 1)
      if (secondCard) {
        container.scrollLeft =
          secondCard.offsetLeft -
          (container.clientWidth - secondCard.clientWidth) / 2
      }
    }
  }, [])

  return (
    <section className=" py-12 md:py-16 overflow-hidden">
      {/* Título da Seção */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center mb-10 md:mb-14">
        <h2 className="text-marrome font-black text-2xl md:text-4xl">
          O que dizem nossos alunos
        </h2>
      </div>

      {/* Container do Carrossel / Slider Horizontal */}
      <div
        ref={scrollContainerRef}
        className="w-full flex md:grid md:grid-cols-3 md:max-w-6xl md:mx-auto md:px-6 gap-4 md:gap-8 
                   overflow-x-auto snap-x snap-mandatory scroll-smooth 
                   px-6 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="w-[75vw] sm:w-[350px] md:w-auto shrink-0 snap-center
                       bg-creme/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl 
                       shadow-sm border border-marrome/10 flex flex-col justify-between text-center"
          >
            <div>
              {/* 5 Estrelas */}
              <div className="flex justify-center gap-1 text-verdec mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarRoundedIcon key={i} />
                ))}
              </div>
              <p className="text-marrome text-sm md:text-base leading-relaxed font-medium mb-6 break-words">
                {review.text}
              </p>
            </div>
            <p className="text-marrome font-bitter font-semibold text-sm md:text-base">
              {review.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
