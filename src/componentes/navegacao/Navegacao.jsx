import React from "react";
import { Link } from 'react-router-dom';
const Navegacao = () => {
    return(
        <React.Fragment>
            <nav>
                <Link className="opcoesNav" to="/">Açaís no Ponto</Link>
                <Link className="opcoesNav" to="/montar_acai">Montar Açaí</Link>
                <Link className="opcoesNav" to="/milk-shake">Milk Shake</Link>
                <Link className="opcoesNav" to="/bebidas">Bebidas</Link>
                <Link className="opcoesNav" to="/carrinho">Carrinho</Link>
            </nav>
        </React.Fragment>
    )
}
export default Navegacao