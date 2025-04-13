export const Linkpage=(id,page)=>{
    const link=document.getElementById(id);
    link.addEventListener("click",(ev)=>{
       ev.preventDefault();
       page();
    })
}