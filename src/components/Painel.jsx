function Painel() {
    return (
        <div className="pagina" id="pagina-painel">
            <header className="hero">
                <div className="container">
                    <h1 className="display-5 serif mb-3">Painel de plantios</h1>
                    <p>
                        Demonstração interativa do acompanhamento da produção. Registre plantios,
                        simule a passagem do tempo e veja cada ciclo se completar.
                    </p>
                </div>
            </header>

            <main>
                <section className="secao">
                    <div className="container">

                        <div className="row g-3 mb-4">
                            <div className="col-6 col-md-3">
                                <div className="stat-card stat-verde">
                                    <div className="stat-num" id="stat-ativos">0</div>
                                    <div className="stat-label">Plantios ativos</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card stat-amarelo">
                                    <div className="stat-num" id="stat-crescendo">0</div>
                                    <div className="stat-label">Em crescimento</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card stat-terra">
                                    <div className="stat-num" id="stat-prontos">0</div>
                                    <div className="stat-label">Prontos para colheita</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card stat-azul">
                                    <div className="stat-num" id="stat-colhidos">0</div>
                                    <div className="stat-label">Colheitas registradas</div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="panel-card h-100">
                                    <div className="panel-card-header">
                                        <h3>🪴 Registrar plantio</h3>
                                    </div>
                                    <div className="panel-card-body">
                                        <div className="mb-3">
                                            <label htmlFor="plantio-cultura" className="form-label">Cultura</label>
                                            <select id="plantio-cultura" className="form-select">
                                                <option value="">Selecione</option>
                                                <option value="alface">Alface</option>
                                                <option value="rucula">Rúcula</option>
                                                <option value="cebolinha">Cebolinha</option>
                                                <option value="couve">Couve</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="plantio-mudas" className="form-label">Mudas</label>
                                            <input type="number" id="plantio-mudas" className="form-control" min="1" max="500" placeholder="Exemplo: 10" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="plantio-local" className="form-label">Local</label>
                                            <input type="text" id="plantio-local" className="form-control" maxLength="50" placeholder="Exemplo: Varanda" />
                                        </div>
                                        <button id="botao-adicionar-plantio" type="button" className="btn btn-verde w-100">Adicionar plantio</button>
                                        <div id="erro-plantio" className="text-danger mt-3" role="alert"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="panel-card">
                                    <div className="panel-card-header">
                                        <h3>🌱 Plantios em andamento</h3>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <button id="botao-simular" type="button" className="btn btn-verde btn-sm">Simular 7 dias</button>
                                            <button id="botao-limpar" type="button" className="btn btn-contorno-verde btn-sm">Limpar tudo</button>
                                        </div>
                                    </div>
                                    <div className="panel-card-body p-0" id="lista-plantios"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 mt-1">
                            <div className="col-12">
                                <div className="panel-card">
                                    <div className="panel-card-header">
                                        <h3>🧺 Histórico de colheitas</h3>
                                    </div>
                                    <div className="panel-card-body p-0" id="lista-colheitas"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Painel
