import React from "react";
import { Link } from 'react-router-dom';
import "./nav.css";

const Navegacao = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="opcoesNav primeiroItem" to="/">
            Açaís no Ponto
          </Link>
          <Link className="opcoesNav" to="/montar_acai">
            Montar Açaí
          </Link>
          <Link className="opcoesNav" to="/milk-shake">
            Milk Shake
          </Link>
          {/* <Link className="opcoesNav" to="/bebidas">
            Bebidas
          </Link> */}
          <Link className="opcoesNav" to="/carrinho">
            Carrinho
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navegacao;
