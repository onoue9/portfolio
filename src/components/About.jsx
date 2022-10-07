import vivi from '../assets/vivi.gif'

const About = () => (
  <div id="about" className="flex flex-col justify-center items-center bg-cyan-500 text-white">
    <strong className="mt-4 text-xl sm:text-3xl sm:mt-20">Sobre mim</strong>
    <div className="grid gap-2 my-4 mx-4 text-xl sm:grid-rows-2 sm:grid-flow-col sm:mb-20">
      <p className="flex justify-center items-center p-5 w-full h-full text-center">Olá, meu nome é Filipe Lira Onoue Melo. Eu tenho 28 anos. Sou de Duque de Caxias no Rio de Janeiro, Brasil.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">Sou amante de tudo relacionado a tecnologia, mundo geek e games. Por isso me interessei pelo desenvolvimento e decidi investir nessa área.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">Sempre gostei de ajudar as pessoas, e saber que posso trabalhar fazendo oque gosto (2x), tem me motivado cada vez mais a me dedicar e buscar conhecimento para poder trabalhar com isso.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">Sou apaixonado por séries e filmes, e algumas franquias de jogos de RPG como Final Fantasy, The Elder Scrolls, The Witcher e outros. Eu pratico alguns esportes como basquete e futebol. Gosto de estar com a família e amigos, bater papo e às vezes cantar no karaokê.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">No momento terminei o curso de Desenvolvimento Web pela Trybe, e estou a procura de uma oportunidade de emprego.</p>
      <div className="flex justify-center items-center w-full h-full text-center mb-10">
        <img src={vivi} alt="Vivi" className="w-2/3 rounded-md" />
      </div>
    </div>
  </div>
)

export default About;
