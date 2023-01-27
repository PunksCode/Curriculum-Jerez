function inicializarEventos() {
    var facebook = document.querySelector("#facebook");
    var instagram = document.querySelector("#instagram");

    // Agregar eventos de clic a los elementos
    facebook.addEventListener("click", function() {
        window.location.href = "https://www.facebook.com/agustin.jerez.37";
    });

    instagram.addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/agustinpunks";
    });
}