import trybewarts from '../assets/Project-Trybewarts.jpeg';
import recipeApp from '../assets/Project-Recipe-App.jpeg';
import { useState } from 'react';
import nlwImage from '../assets/nlwImage.jpeg'
import trybetunes from '../assets/project-trybetunes.jpeg';

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
  {
    title: 'Projet Nlw-eSports',
    image: nlwImage,
    url: "https://onoue9.github.io/nlw-esports-frontend/",
    repo: "https://github.com/onoue9/nlw-esports-frontend",
  },
  {
    title: 'Project TrybeTunes',
    image: trybetunes,
    url: "https://onoue9.github.io/trybetunes",
    repo: "https://github.com/onoue9/trybetunes"
  }
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
  <div id="project" className="flex flex-col justify-center items-center my-20">
    <div className="flex flex-col gap-2 justify-center items-center">
      <strong className="mb-10 text-2xl sm:text-3xl">{carousel[carouselIndex].title}</strong>
      <img className="w-5/6 rounded-md"src={carousel[carouselIndex].image} alt={carousel[carouselIndex].title}/>
      <div className="mt-4 flex flex-row justify-between text-center text-white text-lg gap-4">
        <a className="w-24 bg-cyan-500 rounded-md hover:text-black" href={carousel[carouselIndex].url} target="_blank">Demo</a>
        <a className="w-24 bg-cyan-500 rounded-md hover:text-black" href={carousel[carouselIndex].repo} target="_blank">Repo</a>
      </div>
    </div>

    <div className="flex flex-row justify-between items-center text-center my-8 text-white text-lg gap-4">
      <button
        className="w-20 bg-cyan-500 rounded-md"
        onClick={() => handlePrevButton() }
      >Próximo</button>

      <span className="w-20 bg-cyan-500 rounded-md">{carouselIndex + 1}</span>

      <button
        className="w-20 bg-cyan-500 rounded-md"
        onClick={() => handleNextButton() }
      >Anterior</button>
    </div>
  </div>
  )
}

export default Project;
