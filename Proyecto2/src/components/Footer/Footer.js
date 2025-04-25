import "./Footer.css";
import { Button } from "../Button/Button";
import Github from "../../assets/img/Github.png";
import Linkedin from "../../assets/img/Linkedin.png";
import Instagram from "../../assets/img/Instagram.png";


export const Footer=()=>{
    return `
   <h2 class="footer-title">Puede ver mi perfil en:</h2>
    <div class="footer-container">
        ${Button(Github, "Github")}
        ${Button(Linkedin, "Linkedin")}
        ${Button(Instagram, "Instagram")}
       
    </div>
`
}