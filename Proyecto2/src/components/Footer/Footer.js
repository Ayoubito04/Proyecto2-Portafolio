import "./Footer.css";
import { Button } from "../Button/Button";


export const Footer=()=>{
    return `
   <h2 class="footer-title">Puede ver mi perfil en:</h2>
    <div class="footer-container">
    ${Button("./Github.png","GitHub")}
    ${Button("./Linkedin.png","LinkedIn")}
    ${Button("./Instagram.png","Instagram")}


    
    </div>
`
}