document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var closeNavi = document.getElementById("closeBurger")
var openNavi = document.getElementById("openNav")
openNavi.onclick = function(){openNav()}
function openNav(){
    document.getElementById("burgerMenu").style.width = "50%";
    document.getElementById("burgerMenu").style.maxWidth = "250px";
}
closeNavi.onclick = function(){closeNav()}
function closeNav(){
    document.getElementById("burgerMenu").style.width = "0"
}