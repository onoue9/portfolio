import avatar from '../assets/avatar.png'

const Intro = () => (
  <div id="intro" className="flex w-screen h-screen justify-center content-center items-center">
    <div className="flex flex-col text-center w-2/4">
      <span className="text-4xl">
        Hi, i'm Filipe Onoue
      </span>
      <span className="text-3x1">Fullstack Web Developer</span>
    </div>
    <div className="flex w-2/4 h-auto justify-center">
      <img className="border-solid border-2 rounded-full w-2/4 h-3/4 self-center" src={avatar} alt="a picture of me" />
    </div>
  </div>
)

export default Intro;
