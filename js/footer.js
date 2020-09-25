// para el efecto hover de los iconos e redes sociales

const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");

    //cambias la ruta posicionado desde el index
 //cambio
facebook.addEventListener("mouseover" , hover =>   facebook.src = "assets/icon_facebook_hover.svg");
twitter.addEventListener("mouseover" , hover =>   twitter.src = "assets/icon-twitter-hover.svg");
instagram.addEventListener("mouseover" , hover =>   instagram.src = "assets/icon_instagram-hover.svg");

//vuelvo a la normalidad
facebook.addEventListener("mouseout" , normal =>   facebook.src = "assets/icon_facebook.svg");
twitter.addEventListener("mouseout" , normal =>   twitter.src = "assets/icon-twitter.svg");
instagram.addEventListener("mouseout" , normal =>   instagram.src = "assets/icon_instagram.svg");


