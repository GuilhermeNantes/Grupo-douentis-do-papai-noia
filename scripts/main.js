// Carrega o conteúdo do header.html
document.addEventListener("DOMContentLoaded", function() {
    fetch("/includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Ativa o menu toggle depois de carregar o header
            const menuToggle = document.getElementById("menu-toggle");
            const navLinks = document.querySelector(".nav-links");

            menuToggle.addEventListener("click", function() {
                navLinks.classList.toggle("show");
            });
        });
});

function increver(){
  window.location.href = "../cadastro/index.html"
}

function home(){
    window.location.href = "../home/index.html"
}