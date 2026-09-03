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

export function initPainel() {
    const listaPlantios = document.querySelector("#lista-plantios");
    const botaoAdicionarPlantio = document.querySelector("#botao-adicionar-plantio");
    const botaoSimularDias = document.querySelector("#botao-simular");
    const botaoLimparPlantios = document.querySelector("#botao-limpar");

    if (!listaPlantios || !botaoAdicionarPlantio) return;

    const culturas = {
        alface:    { nome: "Alface",    dias: 60 },
        rucula:    { nome: "Rúcula",    dias: 40 },
        cebolinha: { nome: "Cebolinha", dias: 70 },
        couve:     { nome: "Couve",     dias: 80 }
    };

    let plantios = [
        { id: 1, cultura: "alface", quantidade: 12, local: "Varanda", diasPassados: 53 },
        { id: 2, cultura: "rucula", quantidade: 8,  local: "Quintal", diasPassados: 28 }
    ];
    let proximoId = 3;
    let totalColhidos = 0;
    let colheitas = [];
    let diasSimulados = 0;

    function progresso(p) {
        const total = culturas[p.cultura].dias;
        let pct = (p.diasPassados / total) * 100;
        if (pct > 100) pct = 100;
        return parseInt(pct);
    }

    function fase(p) {
        const pct = progresso(p);
        if (pct >= 100) return "Pronto";
        if (pct >= 50) return "Crescendo";
        return "Inicial";
    }

    function badge(f) {
        if (f === "Pronto")    return '<span class="chip chip-verde">● Pronto</span>';
        if (f === "Crescendo") return '<span class="chip chip-amarelo">● Crescendo</span>';
        return '<span class="chip chip-azul">● Inicial</span>';
    }

    function diasRestantes(p) {
        const r = culturas[p.cultura].dias - p.diasPassados;
        return r < 0 ? 0 : r;
    }

    function renderizar() {
        let crescendo = 0;
        let prontos = 0;

        for (let i = 0; i < plantios.length; i++) {
            const f = fase(plantios[i]);
            if (f === "Pronto") prontos++;
            else if (f === "Crescendo") crescendo++;
        }

        document.querySelector("#stat-ativos").textContent = plantios.length;
        document.querySelector("#stat-crescendo").textContent = crescendo;
        document.querySelector("#stat-prontos").textContent = prontos;
        document.querySelector("#stat-colhidos").textContent = totalColhidos;

        botaoSimularDias.disabled = (plantios.length === 0);
        botaoLimparPlantios.disabled = (plantios.length === 0);

        if (plantios.length === 0) {
            listaPlantios.innerHTML =
                '<div class="estado-vazio">' +
                '<span class="estado-vazio-icon">🪴</span>' +
                '<p class="mb-0">Nenhum plantio registrado.<br>Use o formulário ao lado para começar.</p>' +
                '</div>';
            renderizarHistorico();
            return;
        }

        let linhas = "";
        for (let i = 0; i < plantios.length; i++) {
            const p = plantios[i];
            const c = culturas[p.cultura];
            const pct = progresso(p);
            const f = fase(p);
            const fillClass = pct >= 100 ? "barra-fill pronto" : "barra-fill";

            let acoes = "";
            if (f === "Pronto") {
                acoes += '<button type="button" class="btn btn-verde btn-sm me-1" data-acao="colher" data-id="' + p.id + '">Colher</button>';
            }
            acoes += '<button type="button" class="btn btn-outline-secondary btn-sm" data-acao="remover" data-id="' + p.id + '">Remover</button>';

            linhas +=
                '<tr>' +
                    '<td>' +
                        '<strong class="text-verde">' + c.nome + '</strong>' +
                        '<div class="texto-suave" style="font-size:12px;">' + p.quantidade + ' mudas · ' + p.local + '</div>' +
                    '</td>' +
                    '<td>' + badge(f) + '</td>' +
                    '<td style="min-width:140px;">' +
                        '<div style="font-size:11px;color:var(--text-suave);margin-bottom:4px;">' + pct + '% &middot; ' + diasRestantes(p) + ' dias restantes</div>' +
                        '<div class="barra-progresso"><div class="' + fillClass + '" style="width:' + pct + '%"></div></div>' +
                    '</td>' +
                    '<td class="text-end">' + acoes + '</td>' +
                '</tr>';
        }

        listaPlantios.innerHTML =
            '<div class="table-responsive">' +
                '<table class="tabela-plantios">' +
                    '<thead><tr>' +
                        '<th>Cultura</th><th>Fase</th><th>Progresso</th><th class="text-end">Ações</th>' +
                    '</tr></thead>' +
                    '<tbody>' + linhas + '</tbody>' +
                '</table>' +
            '</div>';

        renderizarHistorico();
    }

    function renderizarHistorico() {
        const lista = document.querySelector("#lista-colheitas");
        if (!lista) return;

        if (colheitas.length === 0) {
            lista.innerHTML =
                '<div class="estado-vazio">' +
                '<span class="estado-vazio-icon">🧺</span>' +
                '<p class="mb-0">Nenhuma colheita registrada ainda.<br>Quando um plantio chegar a 100%, registre a colheita.</p>' +
                '</div>';
            return;
        }

        let linhas = "";
        for (let i = colheitas.length - 1; i >= 0; i--) {
            const c = colheitas[i];
            const quando = c.dia === 0 ? "Hoje" : "Dia " + c.dia;
            linhas +=
                '<tr>' +
                    '<td><strong class="text-verde">' + c.culturaNome + '</strong></td>' +
                    '<td>' + c.quantidade + ' mudas</td>' +
                    '<td>' + c.local + '</td>' +
                    '<td>' + quando + '</td>' +
                '</tr>';
        }

        lista.innerHTML =
            '<div class="table-responsive">' +
                '<table class="tabela-plantios">' +
                    '<thead><tr>' +
                        '<th>Cultura</th><th>Quantidade</th><th>Local</th><th>Quando</th>' +
                    '</tr></thead>' +
                    '<tbody>' + linhas + '</tbody>' +
                '</table>' +
            '</div>';
    }

    botaoAdicionarPlantio.addEventListener("click", function () {
        const cultura = document.querySelector("#plantio-cultura").value;
        const mudasTexto = document.querySelector("#plantio-mudas").value;
        const local = document.querySelector("#plantio-local").value.trim();
        const erro = document.querySelector("#erro-plantio");

        if (cultura === "") {
            erro.textContent = "Selecione uma cultura.";
            return;
        }
        if (mudasTexto === "") {
            erro.textContent = "Informe a quantidade de mudas.";
            return;
        }
        const mudas = Number(mudasTexto);
        if (mudas <= 0) {
            erro.textContent = "Quantidade deve ser maior que zero.";
            return;
        }
        if (local === "") {
            erro.textContent = "Informe o local do plantio.";
            return;
        }

        erro.textContent = "";

        plantios.push({
            id: proximoId,
            cultura: cultura,
            quantidade: mudas,
            local: local,
            diasPassados: 0
        });
        proximoId++;

        document.querySelector("#plantio-cultura").value = "";
        document.querySelector("#plantio-mudas").value = "";
        document.querySelector("#plantio-local").value = "";

        toast("Plantio registrado.");
        renderizar();
    });

    botaoSimularDias.addEventListener("click", function () {
        for (let i = 0; i < plantios.length; i++) {
            const total = culturas[plantios[i].cultura].dias;
            plantios[i].diasPassados = plantios[i].diasPassados + 7;
            if (plantios[i].diasPassados > total) {
                plantios[i].diasPassados = total;
            }
        }
        diasSimulados = diasSimulados + 7;
        toast("7 dias simulados.");
        renderizar();
    });

    botaoLimparPlantios.addEventListener("click", function () {
        plantios = [];
        colheitas = [];
        totalColhidos = 0;
        diasSimulados = 0;
        toast("Painel limpo.");
        renderizar();
    });

    listaPlantios.addEventListener("click", function (event) {
        const botao = event.target;
        if (!botao.dataset || !botao.dataset.acao) return;

        const acao = botao.dataset.acao;
        const id = Number(botao.dataset.id);

        let plantioAlvo = null;
        const novaLista = [];
        for (let i = 0; i < plantios.length; i++) {
            if (plantios[i].id === id) {
                plantioAlvo = plantios[i];
            } else {
                novaLista.push(plantios[i]);
            }
        }

        if (acao === "colher" && plantioAlvo) {
            totalColhidos++;
            colheitas.push({
                culturaNome: culturas[plantioAlvo.cultura].nome,
                quantidade: plantioAlvo.quantidade,
                local: plantioAlvo.local,
                dia: diasSimulados
            });
            toast("Colheita registrada.");
        } else {
            toast("Plantio removido.");
        }

        plantios = novaLista;
        renderizar();
    });

    renderizar();
}
