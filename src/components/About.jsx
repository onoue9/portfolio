import vivi from '../assets/vivi.gif'

const About = () => (
  <div id="about" className="flex flex-col justify-center items-center bg-cyan-500 text-white">
      <strong className="mt-4 text-xl">About Me</strong>
    <div className="grid grid-rows-2 grid-flow-col gap-2 my-4 mx-4 text-lg">
      <p className="flex justify-center items-center p-5 w-full h-full text-center">Hi, my name is Filipe Lira Onoue Melo. I have 28 years old. I'm from Duque de Caxias in Rio de Janeiro, Brazil.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">I'm a lover of everything related to technology, geek world and games. That's why I got interested in development and decided to invest in this area.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">I have always enjoyed helping people, and knowing that I can work doing this has motivated me more and more to dedicate myself and seek knowledge to be able to work with that.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">I'm passionate about series and movies, and some RPG game franchises like Final Fantasy, The Elder Scrolls, The Witcher and others. I also like card games, Yugioh and Magic. I play some sports like basketball and football. I like to be with family and friends, making small talk and sometimes singing karaoke.</p>
      <p className="flex justify-center items-center p-5 w-full h-full text-center">At the moment I'm finishing my Web Development course at Trybe, where I've already completed 3 modules, Front-end, Back-end and Logic Fundamentals.</p>
      <div className="flex justify-center items-center w-full h-full text-center">
        <img src={vivi} alt="Vivi" className="w-2/3 rounded-md" />
      </div>
    </div>
  </div>
)

export default About;
