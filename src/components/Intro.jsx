import avatar from '../assets/avatar2.png'

const Intro = () => (
  <div id="intro" className="flex flex-col w-screen h-screen justify-center content-center items-center gap-10 sm:my-20 sm:w-full">
    <div className="flex w-3/4 justify-center">
      <img className="border-solid border-2 rounded-full self-center" src={avatar} alt="a picture of me" />
    </div>
    <div className="flex flex-col text-center">
      <span className="text-4xl">
        Olá, eu sou Filipe
      </span>
      <span className="text-3x1">Fullstack Web Developer</span>
    </div>
  </div>
)

export default Intro;
