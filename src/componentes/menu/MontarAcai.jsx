import React from "react";
import Header from "../header/Header";
import Momento from "../momentoAtual/Momento";
import Navegacao from "../navegacao/Navegacao";
const MontarAcai = () => {
   
    return (
            <React.Fragment>
                <Header />
                <Momento />
                <Navegacao />
            </React.Fragment>
      
    )
}
export default MontarAcai
