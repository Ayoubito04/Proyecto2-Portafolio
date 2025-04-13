import "./Projects.css";
import { CleanPage } from "../../utils/CleanPage.js";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard.js";
import { Divider } from "../../components/Divider/Divider.js";
import { projects } from "../../Data/data.js";


export const Projects = () => {
  const main = document.querySelector("main");
  CleanPage(main);
  main.innerHTML = `
    <h2 class="titulo">Mis proyectos</h2>
   ${Divider()}
    <div class="projects-container"></div>
    `;
  const container = document.querySelector(".projects-container");
   for( const project of projects){
  const card= ProjectCard(project);
  container.innerHTML += card;

    }
  }