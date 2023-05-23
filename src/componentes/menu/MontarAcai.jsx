import React, { useState, createContext, useContext } from "react";
import Header from "../header/Header";
import Momento from "../momentoAtual/Momento";
import Navegacao from "../navegacao/Navegacao";

// Criando o contexto do carrinho
const CarrinhoContext = createContext();
const MontarAcai = () => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (item) => {
        setCarrinho([...carrinho, item]);
    };

    const removerDoCarrinho = (item) => {
        const novoCarrinho = carrinho.filter((c) => c !== item);
        setCarrinho(novoCarrinho);
    };
    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
            <React.Fragment>
                <Header />
                <Momento />
                <Navegacao />
                <Carrinho />
            </React.Fragment>
        </CarrinhoContext.Provider>
    )
}
const Carrinho = () => {
    const { carrinho, removerDoCarrinho } = useContext(CarrinhoContext);

    return (
        <React.Fragment>
            <h3>Carrinho de Compras</h3>
            {carrinho.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <ul>
                    {carrinho.map((item, index) => (
                        <li key={index}>
                            {item.nome} - R${item.valor.toFixed(2)}
                            <button onClick={() => removerDoCarrinho(item)}>Remover do Carrinho</button>
                        </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    );
};
export default MontarAcai