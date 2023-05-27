import React from "react";
import Header from "../header/Header";
import Momento from "../momentoAtual/Momento";
import Navegacao from "../navegacao/Navegacao";
import { BsCart3 } from "react-icons/bs";
import "./Bebidas.css"
import Footer from "../footer/Footer";
const Bebidas = ({ adicionarItem }) => {
    const itens = [
        {
            tipo: 'Bebidas sem Álcool', opcoes: [
                { nome: "Água com Gás", valor: 2.5, quantidade: 1},
                { nome: "Água sem Gás", valor: 2.0, quantidade: 1},
                { nome: "Coca Cola 1L", valor: 3.0, quantidade: 1},
                { nome: "Coca Cola 2L", valor: 4.0, quantidade: 1},
                { nome: "Coca Cola Lata", valor: 2.5, quantidade: 1},
                { nome: "Guaraná 2L", valor: 3.5, quantidade: 1},
                { nome: "Fanta Laranja 2L", valor: 3.5, quantidade: 1},
            ]
        },
        {
            tipo: "Bebidas Quentes", opcoes: [
                {nome: "Caranguejo Ouro - Litro", valor: 12.00, quantidade: 1},
                {nome: "Caranguejo Prata - Litro", valor: 12.00, quantidade: 1},
                {nome: "Ypióca - Litro", valor: 12.00, quantidade: 1},
                {nome: "Pitú - Litro", valor: 12.00, quantidade: 1},
                {nome: "Dreher", valor: 32.00, quantidade: 1},
                {nome: "Black & White", valor: 55.00, quantidade: 1},
                {nome: "Passport Scoth", valor: 55.00, quantidade: 1},
                {nome: "Vodka Skyy", valor: 50.00, quantidade: 1},
                {nome: "vodka Smirnoff", valor: 70.00, quantidade: 1},
                {nome: "Caranguejo Ouro- Lata", valor: 8.00, quantidade: 1},
                {nome: "Caranguejo Prata - Lata", valor: 8.00, quantidade: 1},
                {nome: "Ypióca - Lata", valor: 8.00, quantidade: 1},
                {nome: "Pitú - Lata", valor: 8.00, quantidade: 1},
            ]
        },
        {
            tipo:"Cervejas", opcoes: [
                { nome: "Skol", valor: 5.0, quantidade: 1},
                { nome: "Brahma Chopp", valor: 4.5, quantidade: 1},
                { nome: "Amstel", valor: 4.0, quantidade: 1},
                { nome: "Devassa", valor: 4.0, quantidade: 1},
                { nome: "Itaipava", valor: 3.5, quantidade: 1},
                { nome: "Heineken", valor: 6.0, quantidade: 1},
            ]
        },
    ];
    const selecionarItem = (item) => {
        adicionarItem(item);
    };
    return (
        <React.Fragment>
            <Header />
            <main>
                <Momento />
                <Navegacao />
                <h2>Menu de Bebidas</h2>
                <section className="bebidas">
                    {itens.map((item, index) =>(
                        <div key={index} className="sectionBebidas">
                            <h3>{item.tipo}</h3>
                            <ul>
                                {item.opcoes.map((opcao, opcaoIndex) =>(
                                    <li key={opcaoIndex}>
                                        {opcao.nome} <br /> {opcao.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                                        <br />
                                        <button onClick={() => selecionarItem(opcao)} className="adicionar"> Comprar <BsCart3/> </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </main>
            <Footer/>
        </React.Fragment>

    );
};

export default Bebidas;
