export function initNavegacao() {
    const links = document.querySelectorAll("[data-pagina]");
    const paginas = document.querySelectorAll(".pagina");
    const linksMenu = document.querySelectorAll(".nav-link");

    if (links.length === 0) return;

    function mostrarPagina(nome) {
        for (let i = 0; i < paginas.length; i++) {
            if (paginas[i].id === "pagina-" + nome) {
                paginas[i].classList.add("ativa");
            } else {
                paginas[i].classList.remove("ativa");
            }
        }

        for (let i = 0; i < linksMenu.length; i++) {
            if (linksMenu[i].dataset.pagina === nome) {
                linksMenu[i].classList.add("ativo");
            } else {
                linksMenu[i].classList.remove("ativo");
            }
        }

        window.scrollTo(0, 0);
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
            const nome = this.dataset.pagina;
            mostrarPagina(nome);
        });
    }
}
