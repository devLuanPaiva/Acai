import React from "react";
import Header from "../header/Header";
import Momento from "../momentoAtual/Momento";
import Navegacao from "../navegacao/Navegacao";

const Bebidas = ({ adicionarItem }) => {
    const itens = [
        { nome: "Água com Gás", valor: 2.5 },
        { nome: "Água sem Gás", valor: 2.0 },
        { nome: "Skol", valor: 5.0 },
        { nome: "Brahma Chopp", valor: 4.5 },
        { nome: "Amstel", valor: 4.0 },
        { nome: "Devassa", valor: 4.0 },
        { nome: "Itaipava", valor: 3.5 },
        { nome: "Heineken", valor: 6.0 },
        { nome: "Coca Cola 1L", valor: 3.0 },
        { nome: "Coca Cola 2L", valor: 4.0 },
        { nome: "Coca Cola Lata", valor: 2.5 },
        { nome: "Guaraná 2L", valor: 3.5 },
        { nome: "Fanta Laranja 2L", valor: 3.5 },
    ];
    const selecionarItem = (item) => {
        adicionarItem(item);
    };
    return (
            <React.Fragment>
                <Header />
                <Momento/>
                <Navegacao/>
                <h2>Bebidas</h2>
                <ul>
                    {itens.map((item, index) => (
                        <li key={index}>
                            <span>{item.nome} - R${item.valor.toFixed(2)}</span>
                            <button onClick={() => selecionarItem(item)}>Adicionar ao Carrinho</button>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
    
    );
};

export default Bebidas;
