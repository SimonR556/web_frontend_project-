document.addEventListener('DOMContentLoaded', function() {

    const btnContraste = document.getElementById('btn-contraste');
    const btnAumentar = document.getElementById('btn-aumentar');
    const btnDiminuir = document.getElementById('btn-diminuir');
    const btnEspacamento = document.getElementById('btn-espacamento');
    const body = document.body;

    let tamanhoTexto = 100; 

    btnContraste.addEventListener('click', function() {
        body.classList.toggle('alto-contraste');
    });

    btnEspacamento.addEventListener('click', function() {
        body.classList.toggle('espacamento-ativo');
    });

    btnAumentar.addEventListener('click', function() {
        if (tamanhoTexto < 200) {
            tamanhoTexto += 10;
            body.style.fontSize = tamanhoTexto + '%'; 
        }
    });

    btnDiminuir.addEventListener('click', function() {
        if (tamanhoTexto > 100) {
            tamanhoTexto -= 10;
            body.style.fontSize = tamanhoTexto + '%';
        }
    });

});