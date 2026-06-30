document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    
    if (!usuarioLogado) {
        alert("Você precisa estar logado para cadastrar uma doação!");
        window.location.href = "../pagina_login/login.html";
        return;
    }

    const nomeProduto = document.getElementById("nome_produto").value;
    const descricao = document.getElementById("descricao").value;
    const localEntrega = document.querySelector('input[name="local_entrega"]:checked').value;

    const localFinal = localEntrega === "endereco" ? usuarioLogado.endereco : "UTFPR - Cornélio Procópio";

    const novoProduto = {
        id: Date.now(),
        nomeProduto: nomeProduto,
        descricao: descricao,
        localFinal: localFinal,
        doadorNome: usuarioLogado.nome,
        doadorContato: usuarioLogado.telefone
    };

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.push(novoProduto);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert("Material cadastrado com sucesso! Ele já vai aparecer na vitrine.");
    window.location.href = "../pagina_principal/index.html";
});