function Contato() {
    return (
        <div className="pagina" id="pagina-contato">
            <header className="hero">
                <div className="container">
                    <h1 className="display-5 serif mb-3">Fale Conosco</h1>
                    <p>
                        Quer saber como organizar uma micro-fazenda vertical em sua instituição,
                        condomínio ou projeto social? Envie uma mensagem.
                    </p>
                </div>
            </header>

            <main>
                <section className="secao">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body p-4 p-md-5">
                                        <h2 className="titulo-secao mb-3">Envie sua mensagem</h2>
                                        <form id="form-contato" className="needs-validation" action="#" method="post" noValidate>
                                            <div className="mb-3">
                                                <label htmlFor="nome" className="form-label">Nome completo</label>
                                                <input type="text" className="form-control" id="nome" name="nome" required maxLength="80" placeholder="Digite seu nome" />
                                                <div className="invalid-feedback">Informe seu nome completo.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">E-mail</label>
                                                <input type="email" className="form-control" id="email" name="email" required maxLength="100" placeholder="seuemail@exemplo.com" />
                                                <div className="invalid-feedback">Informe um e-mail válido.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="telefone" className="form-label">Telefone</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="telefone"
                                                    name="telefone"
                                                    required
                                                    placeholder="(11) 99999-9999"
                                                    pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
                                                />
                                                <div className="invalid-feedback">Informe um telefone válido. Exemplo: (11) 99999-9999.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="perfil" className="form-label">Perfil</label>
                                                <select className="form-select" id="perfil" name="perfil" required>
                                                    <option value="">Selecione</option>
                                                    <option value="condominio">Condomínio</option>
                                                    <option value="escola">Escola</option>
                                                    <option value="centro-comunitario">Centro comunitário</option>
                                                    <option value="projeto-social">Projeto social</option>
                                                    <option value="outro">Outro</option>
                                                </select>
                                                <div className="invalid-feedback">Selecione o perfil da instituição.</div>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                                                <textarea
                                                    className="form-control"
                                                    id="mensagem"
                                                    name="mensagem"
                                                    rows="5"
                                                    required
                                                    maxLength="500"
                                                    placeholder="Descreva brevemente sua necessidade (até 500 caracteres)"
                                                ></textarea>

                                                <div className="d-flex justify-content-between align-items-center mt-1">
                                                    <small className="text-muted">Máximo de 500 caracteres.</small>
                                                    <small id="contador-mensagem" className="text-muted" aria-live="polite">0/500 caracteres</small>
                                                </div>

                                                <div className="invalid-feedback">Escreva sua mensagem.</div>
                                            </div>
                                            <button className="btn btn-verde" type="submit">Enviar mensagem</button>
                                        </form>
                                        <div id="resposta-formulario"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contato
