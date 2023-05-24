import React from "react";
import Momento from "../momentoAtual/Momento.jsx";
import Header from "../header/Header"
import "./Home.css"
import Navegacao from "../navegacao/Navegacao.jsx";
const Home = ({ adicionarItem }) => {
    const itens = [
        {
            nome: 'Casadinho',
            ingredientes: ['Leite Condensado', 'Leite em Pó', 'Nutella', 'Creme Ninho', 'Morango'],
            valor: 10.99,
        },
        {
            nome: 'Crocante',
            ingredientes: ['Biscoito Oreo', 'Leite em Pó', 'Leite Condensado', 'Nutella', 'M&M', 'Ovomaltine'],
            valor: 12.99,
        },
        {
            nome: 'Açaí da Casa',
            ingredientes: ['Leite em Pó', 'Leite Condensado', 'Creme Cookies', 'Banana', 'M&M', 'Gotas de Chocolate'],
            valor: 11.99,
        },
        {
            nome: 'Delicia de Chocolate',
            ingredientes: ['Ovomaltine', 'Gotas de Chocolate', 'Leite Condensado', 'Choco Ball', 'Biscoito Oreo', 'Creme Ovomaltine'],
            valor: 13.99,
        },
        {
            nome: 'Sensação',
            ingredientes: ['Leite em Pó', 'Ovomaltine', 'Paçoca', 'Morango', 'Nutella', 'Leite Condensado'],
            valor: 9.99,
        },
        { 
            nome: 'Guaraçaí',
            ingredientes: ['Açaí', 'Leite em Pó', 'Guaraná em Pó', 'Guaraná Líquido', 'Amendoim'],
            valor: 7.99
        },
    ];

    const selecionarItem = (item) => {
        adicionarItem(item);
    };

    return (
        <React.Fragment>
            <Header />
            <Momento />
            <Navegacao />
            <div>
                <h2>Açaí no Ponto</h2>
                {itens.map((item, index) => (
                    <div key={index}>
                        <h3>{item.nome}</h3>
                        <ul>
                            {item.ingredientes.map((ingrediente, ingIndex) => (
                                <li key={ingIndex}>{ingrediente}</li>
                            ))}
                        </ul>
                        <p>Valor: R$ {item.valor.toFixed(2)}</p>
                        <button onClick={() => selecionarItem(item)}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
};

export default Home;
