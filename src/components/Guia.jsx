function Guia() {
    return (
        <div className="pagina" id="pagina-guia">
            <header className="hero">
                <div className="container">
                    <h1 className="display-5 serif mb-3">Guia de Culturas</h1>
                    <p>
                        Consulte as culturas indicadas para o cultivo vertical. Veja ciclo, necessidade
                        de sol e água, nível de dificuldade e uma dica prática para cada uma.
                    </p>
                </div>
            </header>

            <main>
                <section className="secao">
                    <div className="container">

                        <div className="row justify-content-center mb-4">
                            <div className="col-lg-6">
                                <label htmlFor="busca-cultura" className="form-label">Buscar cultura</label>
                                <input
                                    type="text"
                                    id="busca-cultura"
                                    className="form-control"
                                    placeholder="Digite o nome, por exemplo: alface"
                                />
                            </div>
                        </div>

                        <div className="row g-4" id="lista-culturas"></div>

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Guia
