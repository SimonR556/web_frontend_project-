document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-interesse");
    const btnFechar = document.getElementById("btn-fechar-modal");
    
    const botoesInteresse = document.querySelectorAll(".btn-contato");

    botoesInteresse.forEach(botao => {
        botao.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    btnFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});