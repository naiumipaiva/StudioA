import { useState } from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'

const faqData = [
  {
    id: 1,
    question: 'Quais são os horários de funcionamento?',
    answer: 'De segunda a sexta, das 7h às 22h.',
  },
  {
    id: 2,
    question: 'Onde fica localizado o Studio A?',
    answer: (
      <>
        No Centro de São Gonçalo, com ponto de ônibus em frente e portaria 24h
        para sua segurança. <br />
        <span className="block mt-2 font-bold text-verdec">
          Endereço: Rua Dr. Feliciano Sodré, nº 78 - Sala 1504
        </span>
      </>
    ),
  },
  {
    id: 3,
    question: 'Como funcionam os valores e planos?',
    answer:
      'Os planos são personalizados conforme sua necessidade. Entre em contato conosco pelo WhatsApp para saber mais.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1) // Deixa o segundo aberto por padrão como no wireframe

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className=" px-6 py-12 md:py-16 max-w-3xl mx-auto">
      {/* Título da Seção */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-12">
        <h2 className="text-marrome font-black text-2xl md:text-4xl">
          Perguntas Frequentes
        </h2>
      </div>

      {/* Lista do FAQ */}
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div key={item.id} className="flex flex-col">
              {/* Botão da Pergunta */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-verdec text-branco font-medium px-6 py-4 rounded-2xl flex items-center justify-between shadow-sm transition-all text-left"
              >
                <span className="text-base md:text-lg">{item.question}</span>
                {isOpen ? (
                  <KeyboardArrowUpRoundedIcon fontSize="large" />
                ) : (
                  <KeyboardArrowDownRoundedIcon fontSize="large" />
                )}
              </button>

              {/* Resposta com borda lateral decorativa (igual ao wireframe) */}
              {isOpen && (
                <div className="pl-6 ml-4 mt-4 border-l-2 border-verdee text-preto text-sm md:text-base leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
