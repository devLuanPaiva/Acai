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
                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5584998088539%26text%3DOl%25C3%25A1%252C%2Bgostaria%2Bde%2Bfazer%2Bum%2Bpedido%2B&e=AT0qazSxebGRNnJP29mrhR_uwRcTJqaP9-LmCmnYIeseRUixDvowDeqNBFE85_OrSLKdFXg6CT1KNinXBqePd9kD9S0ocl1arPPuwQ"><BsWhatsapp className="iconColor" /></a>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer