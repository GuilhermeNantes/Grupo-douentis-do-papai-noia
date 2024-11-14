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

function agenda() {
    document.documentElement.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth",
    });
  }

// cadastro

const form = document.getElementById("form");
const username = document.getElementById("usuario");
const email = document.getElementById("email");
const nascimento = document.getElementById("nascimento");
const cpf = document.getElementById("cpf");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

function checkInputUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === "") {
        errorInput(username, "O nome de usuário não pode estar vazio.");
    } else {
        successInput(username);
    }
}

function checkInputEmail() {
    const emailValue = email.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.");
    } else if (!emailPattern.test(emailValue)) {
        errorInput(email, "Email inválido.");
    } else {
        successInput(email);
    }
}

function checkInputNascimento() {
    const nascimentoValue = nascimento.value.trim();
    if (nascimentoValue === "") {
        errorInput(nascimento, "A data de nascimento é obrigatória.");
    } else {
        successInput(nascimento);
    }
}

function checkInputCpf() {
    const cpfValue = cpf.value.trim();
    const cpfPattern = /^[0-9]{11}$/;
    if (cpfValue === "") {
        errorInput(cpf, "O CPF é obrigatório.");
    } else if (!cpfPattern.test(cpfValue)) {
        errorInput(cpf, "CPF inválido.");
    } else {
        successInput(cpf);
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputNascimento();
    checkInputCpf();

    const formItems = document.querySelectorAll(".input-box");
    const isValid = [...formItems].every(item => !item.classList.contains("error"));
    
    if (isValid) {
        const dadosUsuario = {
            usuario: username.value.trim(),
            email: email.value.trim(),
            nascimento: nascimento.value.trim(),
            cpf: cpf.value.trim(),
        };
        // Salvando os dados no localStorage
        localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
        
        alert("Cadastro realizado com sucesso!");
        form.reset();
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

function errorInput(input, mensagem) {
    const formItem = input.parentElement;
    const textMensagem = formItem.querySelector(".error-message");
    textMensagem.innerText = mensagem;
    formItem.className = "input-box error";
}

function successInput(input) {
    const formItem = input.parentElement;
    formItem.className = "input-box"; // Altera para classe de sucesso (sem erro)
}
