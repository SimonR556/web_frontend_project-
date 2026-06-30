document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailDigitado = document.getElementById("email").value;
    const senhaDigitada = document.getElementById("senha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(user => user.email === emailDigitado && user.senha === senhaDigitada);

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        
        alert(`Bem-vindo de volta, ${usuarioEncontrado.nome}!`);
        window.location.href = "../pagina_principal/index.html";
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});