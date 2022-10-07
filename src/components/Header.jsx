const Header = () => (
  <header className="sticky top-0 w-full">
    <nav className="bg-cyan-500 text-white">
      <ul className="flex justify-between h-10 items-center">
        <li className="flex justify-center items-center p-2 h-10 sm:p-6"><a href="#intro">Intro</a></li>
        <li className="flex justify-center items-center p-2 h-10 sm:p-6"><a href="#about">Sobre mim</a></li>
        <li className="flex justify-center items-center p-2 h-10 sm:p-6"><a href="#project">Projetos</a></li>
        <li className="flex justify-center items-center p-2 h-10 sm:p-6"><a href="#contact">Contate me</a></li>
      </ul>
    </nav>
  </header>
) 

export default Header;
