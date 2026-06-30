document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha,
        endereco: endereco,
        telefone: telefone
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const emailExiste = usuarios.some(user => user.email === email);
    if (emailExiste) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../pagina_login/login.html";
});