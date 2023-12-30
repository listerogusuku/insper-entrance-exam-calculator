document.addEventListener("DOMContentLoaded", function() {
    const formECC = document.getElementById("calculadoraECC");

    formECC.addEventListener("submit", function(event) {
        event.preventDefault();

        const notaLinguagens = parseFloat(document.getElementById("linguagensECC").value) || 0;
        const notaMatematica = parseFloat(document.getElementById("matematicaECC").value) || 0;
        const notaCNatureza = parseFloat(document.getElementById("cnECC").value) || 0;
        const notaSegundaFase = parseFloat(document.getElementById("segundafaseECC").value) || 0;

        const media = calcularMediaGrupo2(notaLinguagens, notaMatematica, notaCNatureza);
        const mediaFinal = calcularMediaFinal(media, notaSegundaFase);

        document.getElementById("camponotasECC").innerHTML = `
            <fieldset>
                <div class="editablediv" id="resultadoECC" contenteditable="true">
                    Sua Média da Primeira Fase é: <span class="green_text">${media.toFixed(2)}</span><br>
                    Sua Média Final é: <span class="green_text">${mediaFinal.toFixed(2)}</span>
                </div>
                <button onclick="copyToClipboard('resultadoECC')">Copiar Resultado</button>
            </fieldset>
        `;
    });

    function calcularMediaGrupo2(notaLinguagens, notaMatematica, notaCNatureza) {
        const peso = 1 / 3;
        return notaLinguagens * peso + notaMatematica * peso + notaCNatureza * peso;
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
