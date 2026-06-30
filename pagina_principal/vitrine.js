document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-container");
    const modal = document.getElementById("modal-interesse");
    const btnFechar = document.getElementById("btn-fechar-modal");
    
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    if (produtos.length > 0) {
        container.innerHTML = ""; 
        
        produtos.forEach(produto => {
            const card = document.createElement("article");
            card.classList.add("card");
            
            card.innerHTML = `
                <img src="./img/estudante_com_livros.jpg" alt="Imagem do material" width="150" style="border-radius: 8px;">
                <h4>${produto.nomeProduto}</h4>
                <p>Retirada: ${produto.localFinal}</p>
                <button class="btn-contato" data-id="${produto.id}">Tenho Interesse</button>
            `;
            container.appendChild(card);
        });
    }

    container.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-contato")) {
            const idProdutoClicado = event.target.getAttribute("data-id");
            
            const produtoClicado = produtos.find(p => p.id == idProdutoClicado);

            if (produtoClicado) {
                document.getElementById("modal-nome-item").textContent = produtoClicado.nomeProduto;
                document.getElementById("modal-doador").textContent = produtoClicado.doadorNome;
                document.getElementById("modal-contato").textContent = produtoClicado.doadorContato;
                document.getElementById("modal-local").textContent = produtoClicado.localFinal;
                document.getElementById("modal-desc").textContent = produtoClicado.descricao;

                modal.style.display = "flex";
            }
        }
    });

    btnFechar.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.style.display = "none";
    });
});