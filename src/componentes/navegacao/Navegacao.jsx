import React from "react";
import { Link } from 'react-router-dom';
const Navegacao = () => {
    return(
        <React.Fragment>
            <nav>
                <Link className="opcoesNav" to="/">Açaís Prontos</Link>
                <Link className="opcoesNav" to="/montar_acai">Montar Açaí</Link>
                <Link className="opcoesNav" to="/bebidas">Bebidas</Link>
                <Link className="opcoesNav" to="/carrinho">carrinho</Link>
            </nav>
        </React.Fragment>
    )
}
export default Navegacao