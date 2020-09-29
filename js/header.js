// MENU HAMBURGUESA  //
var burger = document.getElementById("cruz");


burger.addEventListener("click" , ()=> {
    const menu = document.getElementById("menu");
    menu.classList.toggle('active');
    
    if(menu.classList.contains("active")){
        burger.src ="assets/Button-close-hover-modo-noc.svg"
    }
        else{
            burger.src ="assets/burger.svg";
        }
        
});

