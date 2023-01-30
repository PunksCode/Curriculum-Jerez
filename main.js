function inicializarEventos() {
    var twitter = document.querySelector("#twitter");
    var instagram = document.querySelector("#instagram");

    // Agregar eventos de clic a los elementos
    twitter.addEventListener("click", function() {
        window.location.href = "https://twitter.com/Agusxpunk";
    });

    instagram.addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/agustinpunks";
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.getElementById('formulario-contacto');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        console.log(name, email, subject);
    });
});