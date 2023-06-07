import React from "react";
import Momento from "../momentoAtual/Momento.jsx";
import Header from "../header/Header"
import Navegacao from "../navegacao/Navegacao.jsx";
import Footer from '../footer/Footer';

import Img from "../../imagens/logo.png"
import "./Home.css"
const Home = ({ adicionarItem }) => {
    const itens = [
        { 
            nome: 'Guaraçaí - 400ml',
            ingredientes: ['Açaí,', 'Leite em Pó,', 'Guaraná em Pó,', 'Guaraná Líquido,', 'Amendoim.'],
            valor: 10.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Sensação - 300ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Ovomaltine,', 'Paçoca,', 'Morango,', 'Nutella.'],
            valor: 9.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        
        {
            nome: 'Açaí Crocante - 300ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Biscoito Oreo,', 'M&M,', 'Ovomaltine.'],
            valor: 9.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí da Casa - 300ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Creme Cookies,', 'Banana,', 'M&M,', 'Gotas de Chocolate.'],
            valor: 9.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Delicia de Chocolate - 300ml',
            ingredientes: ['Leite Condensado,', 'Ovomaltine,', 'Gotas de Chocolate,',  'Choco Ball,', 'Biscoito Oreo,', 'Creme Ovomaltine.'],
            valor: 9.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Casadinho - 300ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Creme Ninho,', 'Morango.'],
            valor: 9.00,
            quantidade: 1,
            imagem: `${Img}`
        },

        {
            nome: 'Açaí Sensação - 400ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Ovomaltine,', 'Paçoca,', 'Morango,', 'Nutella.'],
            valor: 12.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Crocante - 400ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Biscoito Oreo,', 'M&M,', 'Ovomaltine.'],
            valor: 12.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí da Casa - 400ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Creme Cookies,', 'Banana,', 'M&M,', 'Gotas de Chocolate.'],
            valor: 12.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Delicia de Chocolate - 400ml',
            ingredientes: ['Leite Condensado,', 'Ovomaltine,', 'Gotas de Chocolate,',  'Choco Ball,', 'Biscoito Oreo,', 'Creme Ovomaltine.'],
            valor: 12.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Casadinho - 400ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Creme Ninho,', 'Morango.'],
            valor: 12.00,
            quantidade: 1,
            imagem: `${Img}`
        },

        {
            nome: 'Açaí Sensação - 500ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Ovomaltine,', 'Paçoca,', 'Morango,', 'Nutella.'],
            valor: 14.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Crocante - 500ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Biscoito Oreo,', 'M&M,', 'Ovomaltine.'],
            valor: 14.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí da Casa - 500ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Creme Cookies,', 'Banana,', 'M&M,', 'Gotas de Chocolate.'],
            valor: 14.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Delicia de Chocolate - 500ml',
            ingredientes: ['Leite Condensado,', 'Ovomaltine,', 'Gotas de Chocolate,',  'Choco Ball,', 'Biscoito Oreo,', 'Creme Ovomaltine.'],
            valor: 14.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Casadinho - 500ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Creme Ninho,', 'Morango.'],
            valor: 14.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Sensação - 700ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Ovomaltine,', 'Paçoca,', 'Morango,', 'Nutella.'],
            valor: 20.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Crocante - 700ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Biscoito Oreo,', 'M&M,', 'Ovomaltine.'],
            valor: 20.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí da Casa - 700ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Creme Cookies,', 'Banana,', 'M&M,', 'Gotas de Chocolate.'],
            valor: 20.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Delicia de Chocolate - 700ml',
            ingredientes: ['Leite Condensado,', 'Ovomaltine,', 'Gotas de Chocolate,',  'Choco Ball,', 'Biscoito Oreo,', 'Creme Ovomaltine.'],
            valor: 20.00,
            quantidade: 1,
            imagem: `${Img}`
        },
        {
            nome: 'Açaí Casadinho - 700ml',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Creme Ninho,', 'Morango.'],
            valor: 20.00,
            quantidade: 1,
            imagem: `${Img}`
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
                            <div className="ingredientesImagem">
                                <img src={item.imagem} alt="" />
                                <ul>
                                    {item.ingredientes.map((ingrediente, ingIndex) => (
                                        <li key={ingIndex}> {ingrediente} </li>
                                
                                    ))}
                                </ul>
                            </div>
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
