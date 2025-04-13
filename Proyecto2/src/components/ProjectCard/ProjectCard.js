import "./ProjectCard.css"
export const ProjectCard=(project)=>{

 return`<div class="project-card">
    <img src="${project.image}" alt="${project.title} image" class="project-img">
    <h3>${project.title}</h3>
    <p>${project.description}</p> <p class="tech">${project.tech}</p>\
    <p class="tech">${project.github}</p>
    <a href="${project.link}" class="btn">Ver Proyecto</a>
    </div>`
}