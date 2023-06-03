import React from "react";
import { BsInstagram, BsWhatsapp} from "react-icons/bs";
import "./Footer.css"
const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <span>
                    Açaí do Bom: O destino perfeito para saborear o melhor açaí da cidade, com entrega rápida e um sabor irresistível.
                </span>
                <div className="redes">
                    <a href="https://www.instagram.com/_acaidoboom/"><BsInstagram className="iconColor" /></a>
                    <a href="https://api.whatsapp.com/send?phone=5584998088539&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido."><BsWhatsapp className="iconColor" /></a>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer