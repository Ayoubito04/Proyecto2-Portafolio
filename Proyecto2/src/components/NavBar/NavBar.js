import "./NavBar.css";

export const ChangeTheme=()=>{
   const ChangeThemeButton=document.getElementById("change-theme-button")
   ChangeThemeButton.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    ChangeText();

   })
  
}
export const ChangeText=()=>{
    const ChangeThemeButton=document.getElementById("change-theme-button")
    if(document.body.classList.contains("dark")){
        ChangeThemeButton.innerHTML="Light Mode";
    }else{
        ChangeThemeButton.innerHTML="Dark Mode";
      
    }
   }
   export const NavBar=()=>{
    return `
    
    <nav>
    <h1 class="title">Mi Primer Portafolio</h1>
        <ul>
            <li><a href="#home" id="#home">Home</a></li>
            <li><a href="#projects" id="#projects">Projects</a></li>
            <li><button id="change-theme-button">Dark Mode</button></li>         
        </ul>
    </nav>`;
   }
   
