import React from "react";
import { Link } from 'react-router-dom';
import Momento from "../momentoAtual/Momento.jsx";
import Header from "../header/Header"

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <Momento/>
            <nav>
                <Link to="/bebidas">Bebidas</Link>
                <Link to="/carrinho">carrinho</Link>
            </nav>
        </React.Fragment>
    )
};

export default Home;
