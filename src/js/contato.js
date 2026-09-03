function toast(msg) {
    const tc = document.querySelector("#toast-container");
    if (!tc) return;
    const t = document.createElement("div");
    t.className = "toast-custom";
    t.textContent = msg;
    tc.appendChild(t);
    setTimeout(function () {
        t.remove();
    }, 2500);
}

export function initContato() {
    const form = document.querySelector("#form-contato");
    const resposta = document.querySelector("#resposta-formulario");
    if (!form || !resposta) return;

    const nomeInput = document.querySelector("#nome");
    const nomeFeedback = nomeInput.parentElement.querySelector(".invalid-feedback");
    const feedbackPadraoNome = nomeFeedback.textContent;

    const mensagemInput = document.querySelector("#mensagem");
    const contadorMensagem = document.querySelector("#contador-mensagem");

    function atualizarContadorMensagem() {
        if (!mensagemInput || !contadorMensagem) return;
        const totalCaracteres = mensagemInput.value.length;
        contadorMensagem.textContent = totalCaracteres + "/500 caracteres";
        if (totalCaracteres >= 450) {
            contadorMensagem.classList.add("fw-semibold");
        } else {
            contadorMensagem.classList.remove("fw-semibold");
        }
    }

    if (mensagemInput && contadorMensagem) {
        mensagemInput.addEventListener("input", atualizarContadorMensagem);
        atualizarContadorMensagem();
    }

    function validarNomeCompleto() {
        const valor = nomeInput.value.trim();
        const partes = valor.split(/\s+/).filter(Boolean);
        const regexNome = /^[A-Za-zÀ-ÿ]{2,}$/;

        if (partes.length < 2) {
            nomeInput.setCustomValidity("nome-incompleto");
            nomeFeedback.textContent = "Informe seu nome e sobrenome.";
            return false;
        }

        if (!regexNome.test(partes[0]) || !regexNome.test(partes[partes.length - 1])) {
            nomeInput.setCustomValidity("nome-invalido");
            nomeFeedback.textContent = "Nome e sobrenome devem conter apenas letras e ter ao menos 2 letras cada.";
            return false;
        }

        nomeInput.setCustomValidity("");
        nomeFeedback.textContent = feedbackPadraoNome;
        return true;
    }

    nomeInput.addEventListener("input", validarNomeCompleto);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        validarNomeCompleto();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        const nome = nomeInput.value.trim();
        const email = document.querySelector("#email").value.trim();

        resposta.innerHTML =
            '<div class="alert alert-success mt-4" role="alert">' +
            '<strong>Mensagem validada com sucesso.</strong><br>' +
            'Obrigado, ' + nome + '. Em uma versão futura, sua solicitação será enviada para análise. ' +
            'O e-mail informado foi: ' + email + '.' +
            '</div>';

        form.reset();
        atualizarContadorMensagem();
        form.classList.remove("was-validated");
        toast("Mensagem enviada.");
    });
}
