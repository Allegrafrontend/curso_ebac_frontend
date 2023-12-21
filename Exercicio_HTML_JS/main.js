document.addEventListener('DOMContentLoaded', function () {
    var ultimoResultado = "";

    var form = document.getElementById('formNumbers');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var campoA = document.getElementById("campoA").value;
        var campoB = document.getElementById("campoB").value;
        
        var mensagemElement = document.getElementById("mensagem");
        
        if (campoA === "" || campoB === "") {
            mensagemElement.textContent = "Por favor, preencha ambos os campos.";
        } else {
            if (Number(campoB) > Number(campoA)) {
                ultimoResultado = "Formulário válido! B é maior que A.";
                setTimeout(function () {
                    location.reload();
                }, 2000);
                }
            else {
                ultimoResultado = "Formulário inválido! B deve ser maior que A.";
            }
            mensagemElement.textContent = ultimoResultado;
            
        }
    })
});