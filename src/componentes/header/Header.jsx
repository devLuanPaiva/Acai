import React from "react";
import './Header.css';
import LogoImg from "../../imagens/logo.png"
const Header = () =>{
    return(
        <React.Fragment>
            <header>
                <img src={LogoImg} alt="logo" />
            </header>
        </React.Fragment>
    )
}
export default Header