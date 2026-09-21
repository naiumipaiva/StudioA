import Ig1 from '../../assets/img/ig1.jpeg'
import Ig2 from '../../assets/img/ig2.jpeg'
import Ig3 from '../../assets/img/ig3.jpeg'
import Ig4 from '../../assets/img/ig4.jpeg'
import Ig5 from '../../assets/img/ig5.jpeg'
import Ig6 from '../../assets/img/ig6.jpeg'

const Gallery = () => {
  return (
    <section className=" px-6 py-12 md:py-16">
      {/* Cabeçalho da Seção */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-10 md:mb-14">
        <h2 className="text-marrome font-black text-2xl md:text-4xl mb-3">
          Nosso dia a dia no Studio A
        </h2>
        <p className="text-preto/80 font-medium text-sm md:text-base max-w-xl">
          Veja como é o ambiente, os treinos e a energia da nossa comunidade
        </p>
      </div>

      {/* Grid de Imagens (2 colunas no mobile, 3 colunas no desktop) */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
          <img
            src={Ig1}
            alt="Foto 1 do Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
          <img
            src={Ig2}
            alt="Foto 2 do Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
          <img
            src={Ig3}
            alt="Foto 3 do Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
          <img
            src={Ig4}
            alt="Foto 4 do Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
          <img
            src={Ig5}
            alt="Foto 5 do Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
          <img
            src={Ig6}
            alt="Foto 6 do Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Rodapé / Chamada para o Instagram */}
      <div className="flex flex-col items-center text-center">
        <p className="text-preto text-sm md:text-base mb-3 font-medium">
          Acompanhe mais no nosso Instagram
        </p>
        <a
          href="https://instagram.com/_studioapilates"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:text-marrome/20 text-marrom font-black text-lg px-6 py-3 rounded-full transition-colors"
        >
          @_studioapilates
        </a>
      </div>
    </section>
  )
}

export default Gallery
