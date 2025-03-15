const header = document.querySelector(".site_header");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 0){
        header.style.backdropFilter = "blur(100px)";
        header.style.background = "#008EC4";
    } else {
        header.style.backdropFilter = "blur(0px)";
        header.style.background = "transparent";
    }
})