import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Sistema from './components/Sistema.jsx'
import Guia from './components/Guia.jsx'
import Painel from './components/Painel.jsx'
import Contato from './components/Contato.jsx'
import { initNavegacao } from './js/navegacao.js'
import { initContato } from './js/contato.js'
import { initPainel } from './js/painel.js'
import { initGuia } from './js/guia.js'

function App() {
    useEffect(() => {
        initNavegacao()
        initContato()
        initPainel()
        initGuia()
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <Sistema />
            <Guia />
            <Painel />
            <Contato />
            <Footer />
            <div id="toast-container" aria-live="polite"></div>
        </>
    )
}

export default App
