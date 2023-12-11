
/* Menu - down */

window.addEventListener("scroll", () =>{
    const header = document.querySelector("header");
    if (window.scrollY>0){
        header.classList.add("down");
    }else{
        header.classList.remove("down");
    }
   
})

const menu = document.querySelector("#main");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    main.classList.add("visible");
})

close.addEventListener("click", () =>{
    main.classList.remove("visible");
})