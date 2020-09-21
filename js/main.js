$(document).ready(function(){
    $(".navbar-toggler, .overlay2").on("click", function(){
        $(".mobileMenu, .overlay2").toggleClass("open");
    })
});


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}