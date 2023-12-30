document.addEventListener("DOMContentLoaded", function() {
    const formAED = document.getElementById("calculadoraAED");

    formAED.addEventListener("submit", function(event) {
        event.preventDefault();

        const notaLinguagens = parseFloat(document.getElementById("linguagensAED").value) || 0;
        const notaCHumanas = parseFloat(document.getElementById("chAED").value) || 0;
        const notaMatematica = parseFloat(document.getElementById("matematicaAED").value) || 0;
        const notaSegundaFase = parseFloat(document.getElementById("segundafaseAED").value) || 0;

        const media = calcularMediaGrupo1(notaLinguagens, notaCHumanas, notaMatematica);
        const mediaFinal = calcularMediaFinal(media, notaSegundaFase);

        document.getElementById("camponotasAED").innerHTML = `
            <fieldset>
                <div class="editablediv" id="resultadoAED" contenteditable="true">
                    Sua Média da Primeira Fase é: <span class="green_text">${media.toFixed(2)}</span><br>
                    Sua Média Final é: <span class="green_text">${mediaFinal.toFixed(2)}</span>
                </div>
                <button onclick="copyToClipboard('resultadoAED')">Copiar Resultado</button>
            </fieldset>
        `;
    });

    function calcularMediaGrupo1(notaLinguagens, notaCHumanas, notaMatematica) {
        const pesoLC = 0.25;
        const pesoCH = 0.25;
        const pesoMT = 0.5;
        return notaLinguagens * pesoLC + notaCHumanas * pesoCH + notaMatematica * pesoMT;
    }

    function calcularMediaFinal(mediaPrimeiraFase, notaSegundaFase) {
        return Math.pow(Math.pow(mediaPrimeiraFase, 3) * notaSegundaFase, 1 / 4);
    }

    function copyToClipboard(elem) {
        var range = document.createRange();
        range.selectNode(document.getElementById(elem));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
});
