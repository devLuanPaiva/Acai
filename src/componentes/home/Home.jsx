import React from "react";
import Momento from "../momentoAtual/Momento.jsx";
import Header from "../header/Header"
import Navegacao from "../navegacao/Navegacao.jsx";
import Footer from '../footer/Footer';
import "./Home.css"
const Home = ({ adicionarItem }) => {
    const itens = [
        {
            nome: 'Açaí Sensação',
            ingredientes: ['Leite Condensado', 'Leite em Pó', 'Ovomaltine', 'Paçoca', 'Morango', 'Nutella'],
            valor: 9.99,
            quantidade: 1,
        },
        
        {
            nome: 'Açaí Crocante',
            ingredientes: ['Leite Condensado', 'Leite em Pó', 'Nutella', 'Biscoito Oreo', 'M&M', 'Ovomaltine'],
            valor: 12.99,
            quantidade: 1,
        },
        {
            nome: 'Açaí da Casa',
            ingredientes: ['Leite Condensado', 'Leite em Pó', 'Creme Cookies', 'Banana', 'M&M', 'Gotas de Chocolate'],
            valor: 11.99,
            quantidade: 1,
        },
        {
            nome: 'Açaí Delicia de Chocolate',
            ingredientes: ['Leite Condensado', 'Ovomaltine', 'Gotas de Chocolate',  'Choco Ball', 'Biscoito Oreo', 'Creme Ovomaltine'],
            valor: 13.99,
            quantidade: 1,
        },
        {
            nome: 'Açaí Casadinho',
            ingredientes: ['Leite Condensado', 'Leite em Pó', 'Nutella', 'Creme Ninho', 'Morango'],
            valor: 10.99,
            quantidade: 1,
        },
        { 
            nome: 'Guaraçaí',
            ingredientes: ['Açaí', 'Leite em Pó', 'Guaraná em Pó', 'Guaraná Líquido', 'Amendoim'],
            valor: 7.99,
            quantidade: 1,
        },
    ];

    const selecionarItem = (item) => {
        adicionarItem(item);
    };

    return (
        <React.Fragment>
            <Header />
            <main className="paginaPrincipal">
                <Momento />
                <Navegacao />
                <h2>Açaí no Ponto</h2>
                <section className="acaiNoPonto">
                    {itens.map((item, index) => (
                        <div key={index} className="acais">
                            <h3>{item.nome}</h3>
                            <ul>
                                {item.ingredientes.map((ingrediente, ingIndex) => (
                                    <li key={ingIndex}>{ingrediente}</li>
                                ))}
                            </ul>
                            <p>Valor: {item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            <button onClick={() => selecionarItem(item)} className="adicionar">Adicionar ao Carrinho</button>
                        </div>
                    ))}
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
};

export default Home;
