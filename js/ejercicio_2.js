window.onload = function() {
    var enlace = document.querySelector("a");
    enlace.addEventListener("click", function(event){
        event.preventDefault();
        alert("Se ha clicado el enlace");
    })
}