window.addEventListener("scroll", function(){
    let nav = document.getElementById("nav");
    nav.classList.toggle("abajo",window.scrollY>1);
})