import "./Home.css";
import { CleanPage } from "../../utils/CleanPage";

export const Home=()=>{	
    const main=document.querySelector("main");
    CleanPage(main);
    main.innerHTML=`
    <h1 class="title">Bienvenido a mi Portafolio</h1>
    <div class="home-container">
    <p>Soy estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM) y actualmente estoy cursando un máster en Desarrollo de Aplicaciones Web (Fullstack) en THEPOWER FP. Desde que empecé mi camino en el mundo de la programación, me he centrado en el desarrollo de aplicaciones web, buscando siempre aprender y mejorar en nuevas tecnologías y herramientas que me permitan crear interfaces funcionales y atractivas.Espero que os guste y gracias por visitar mi portafolio<p>
    
    </div>
    `;
}
