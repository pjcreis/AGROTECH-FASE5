export function initGuia() {
    const lista = document.querySelector("#lista-culturas");
    const busca = document.querySelector("#busca-cultura");

    if (!lista || !busca) return;

    // Valores médios para cultivo vertical bem cuidado. Servem como referência.
    const culturas = [
        {
            id: "alface", nome: "Alface", icone: "🥬", ciclo: 60,
            sol: "Meia-sombra a sol pleno", agua: "Rega diária", dificuldade: "Fácil",
            dica: "Colha as folhas externas primeiro para prolongar a produção."
        },
        {
            id: "rucula", nome: "Rúcula", icone: "🌿", ciclo: 40,
            sol: "Sol pleno a meia-sombra", agua: "Rega frequente", dificuldade: "Fácil",
            dica: "Ciclo curto. Faça plantios escalonados a cada 15 dias."
        },
        {
            id: "cebolinha", nome: "Cebolinha", icone: "🧅", ciclo: 70,
            sol: "Sol pleno", agua: "Rega moderada", dificuldade: "Fácil",
            dica: "Corte a 2 cm da base, que ela rebrota várias vezes."
        },
        {
            id: "couve", nome: "Couve", icone: "🥬", ciclo: 80,
            sol: "Sol pleno", agua: "Rega regular", dificuldade: "Média",
            dica: "Retire as folhas de baixo para cima; a planta produz por meses."
        },
        {
            id: "espinafre", nome: "Espinafre", icone: "🍃", ciclo: 55,
            sol: "Meia-sombra", agua: "Rega frequente", dificuldade: "Média",
            dica: "Prefere clima ameno. Evite os períodos de calor mais forte."
        },
        {
            id: "manjericao", nome: "Manjericão", icone: "🌱", ciclo: 65,
            sol: "Sol pleno", agua: "Rega moderada", dificuldade: "Fácil",
            dica: "Belisque as pontas com frequência para a planta ficar mais cheia."
        },
        {
            id: "salsa", nome: "Salsa", icone: "🌿", ciclo: 75,
            sol: "Meia-sombra a sol", agua: "Rega regular", dificuldade: "Média",
            dica: "A germinação é lenta. Tenha paciência nas primeiras semanas."
        },
        {
            id: "cenoura", nome: "Cenoura", icone: "🥕", ciclo: 90,
            sol: "Sol pleno", agua: "Rega moderada", dificuldade: "Média",
            dica: "Use um recipiente fundo para a raiz se desenvolver bem."
        }
    ];

    function chipDificuldade(nivel) {
        if (nivel === "Fácil") return '<span class="chip chip-verde">Fácil</span>';
        return '<span class="chip chip-amarelo">Média</span>';
    }

    function renderizarLista(filtro) {
        const termo = filtro.trim().toLowerCase();
        let html = "";
        let encontrados = 0;

        for (let i = 0; i < culturas.length; i++) {
            const c = culturas[i];
            if (termo !== "" && c.nome.toLowerCase().indexOf(termo) === -1) {
                continue;
            }
            encontrados++;
            html +=
                '<div class="col-md-6 col-lg-3">' +
                    '<div class="card h-100">' +
                        '<div class="card-body">' +
                            '<div class="icone-card">' + c.icone + '</div>' +
                            '<h3 class="h5 card-title mb-1">' + c.nome + '</h3>' +
                            '<div class="mb-2">' + chipDificuldade(c.dificuldade) + '</div>' +
                            '<p class="texto-suave mb-3" style="font-size:13px;">Ciclo de cerca de ' + c.ciclo + ' dias até a colheita.</p>' +
                            '<button type="button" class="btn btn-contorno-verde btn-sm w-100" data-cultura="' + c.id + '">Ver detalhes</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        }

        if (encontrados === 0) {
            html =
                '<div class="col-12">' +
                    '<div class="estado-vazio">' +
                        '<span class="estado-vazio-icon">🔍</span>' +
                        '<p class="mb-0">Nenhuma cultura encontrada para essa busca.</p>' +
                    '</div>' +
                '</div>';
        }

        lista.innerHTML = html;
    }

    function mostrarDetalhes(id) {
        let cultura = null;
        for (let i = 0; i < culturas.length; i++) {
            if (culturas[i].id === id) {
                cultura = culturas[i];
            }
        }
        if (!cultura) return;

        const conteudo =
            '<div class="col-12">' +
                '<div class="panel-card">' +
                    '<div class="panel-card-header">' +
                        '<h3>' + cultura.icone + ' ' + cultura.nome + '</h3>' +
                        '<button type="button" class="btn btn-contorno-verde btn-sm" data-voltar="1">Voltar ao guia</button>' +
                    '</div>' +
                    '<div class="panel-card-body">' +
                        '<div class="row g-3">' +
                            '<div class="col-md-3"><strong class="text-verde">Ciclo</strong><div class="texto-suave">' + cultura.ciclo + ' dias</div></div>' +
                            '<div class="col-md-3"><strong class="text-verde">Sol</strong><div class="texto-suave">' + cultura.sol + '</div></div>' +
                            '<div class="col-md-3"><strong class="text-verde">Água</strong><div class="texto-suave">' + cultura.agua + '</div></div>' +
                            '<div class="col-md-3"><strong class="text-verde">Dificuldade</strong><div class="texto-suave">' + cultura.dificuldade + '</div></div>' +
                        '</div>' +
                        '<hr>' +
                        '<p class="mb-0"><strong class="text-verde">Dica: </strong>' + cultura.dica + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';

        lista.innerHTML = conteudo;
    }
    busca.addEventListener("input", function () {
        renderizarLista(busca.value);
    });
    lista.addEventListener("click", function (event) {
        const botao = event.target;
        if (botao.dataset && botao.dataset.cultura) {
            mostrarDetalhes(botao.dataset.cultura);
        } else if (botao.dataset && botao.dataset.voltar) {
            renderizarLista(busca.value);
        }
    });
    renderizarLista("");
}
