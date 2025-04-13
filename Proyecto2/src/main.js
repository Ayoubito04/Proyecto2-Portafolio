import "./style.css";
import { CleanPage} from "./utils/CleanPage";
import { Home } from "./Pages/Home/Home.js";
import { Projects } from "./Pages/Projects/Projects.js";
import {Linkpage} from "./utils/LinkPage.js";
import { ChangeTheme } from "./components/NavBar/NavBar.js";
import { Button } from "./components/Button/Button.js";
import { ChangeText } from "./components/NavBar/NavBar.js";
import { NavBar } from "./components/NavBar/NavBar.js";
import { Footer } from "./components/Footer/Footer.js";


 const printHeader=()=>{
    const header=document.querySelector("header");
    header.innerHTML=`
    ${NavBar()} 
    `;
    ChangeTheme();



}
const printMain=()=>{
 const main=document.querySelector("main");
 CleanPage(main);
    Linkpage("#home",Home);
    Linkpage("#projects",Projects);
    Home();
}
const printFooter=()=>{
    const footer=document.querySelector("footer");
    footer.innerHTML=`${Footer()}`;
}
printHeader();
printMain();
printFooter();