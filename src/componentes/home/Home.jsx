import React from "react";
import Momento from "../momentoAtual/Momento.jsx";
import Header from "../header/Header"
import "./Home.css"
import Navegacao from "../navegacao/Navegacao.jsx";
const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <Momento/>
            <Navegacao/>
        </React.Fragment>
    )
};

export default Home;
