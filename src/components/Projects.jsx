import trybewarts from '../assets/Project-Trybewarts.jpeg';
import recipeApp from '../assets/Project-Recipe-App.jpeg';
import { useState } from 'react';

const carousel = [
  {
    title: 'Project TrybeWarts',
    image: trybewarts,
    url: "https://onoue9.github.io/trybe-trybewarts/",
    repo: "https://github.com/onoue9/trybe-trybewarts",
  },
  {
    title: 'Project Recipes App',
    image: recipeApp,
    url: "https://recipes-app-onoue9.herokuapp.com/",
    repo: "https://github.com/onoue9/project-recipes-app",
  },
];


const Project = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  
  const handleNextButton = () => {
    if (carouselIndex + 1 >= carousel.length) {
      return setCarouselIndex(0)
    }
    return setCarouselIndex(carouselIndex + 1)
  }

  const handlePrevButton = () => {
    if (carouselIndex - 1 < 0) {
      return setCarouselIndex(carousel.length - 1)
    }
    return setCarouselIndex(carouselIndex - 1)
  }

  return (
  <div id="project" className="flex flex-col justify-center w-auto h-screen">
    <div className="mt-4 flex flex-col justify-center items-center h-3/4">
      <h2 className='p-2'>{carousel[carouselIndex].title}</h2>
      <div className="flex flex-col justify-center items-center w-auto">
        <div className="w-max h-max">
          <img className="w-fit h-3/4 rounded-2xl"src={carousel[carouselIndex].image} alt={carousel[carouselIndex].title}/>
        </div>
        <li className="p-2 flex flex-col w-1/4 h-1/4 justify-center items-center">
          <ul><a href={carousel[carouselIndex].url}>Demo Url</a></ul>
          <ul><a href={carousel[carouselIndex].repo}>Repo Url</a></ul>
        </li>
      </div>
    </div>
    <div className="flex content-center items-center justify-center p-2 h-min">
      <button
        className='p-2'
        onClick={() => handlePrevButton() }
      >Prev</button>
      <span className='p-2'>{carouselIndex + 1}</span>
      <button
        className='p-2'
        onClick={() => handleNextButton() }
      >Next</button>
    </div>
  </div>
  )
}

export default Project;
