function Navbar() {
    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#" data-pagina="home">
                    Sistema Orquestrador de Micro-Fazendas <span>Verticais</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Abrir menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menuPrincipal">
                    <ul className="navbar-nav gap-md-3">
                        <li className="nav-item"><a className="nav-link ativo" href="#" data-pagina="home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" data-pagina="sistema">O Sistema</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" data-pagina="guia">Guia de Culturas</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" data-pagina="painel">Painel</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" data-pagina="contato">Fale Conosco</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
