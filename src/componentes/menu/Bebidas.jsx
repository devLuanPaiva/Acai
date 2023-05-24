import React from "react";
import Header from "../header/Header";
import Momento from "../momentoAtual/Momento";
import Navegacao from "../navegacao/Navegacao";

const Bebidas = ({ adicionarItem }) => {
    const itens = [
        {
            tipo: 'Bebidas Geladas', opcoes: [
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
            ]
        },
        {
            tipo: "Bebidas Quentes", opcoes: [
                {nome: "Caranguejo Ouro - Litro", valor: 12.00},
                {nome: "Caranguejo Prata - Litro", valor: 12.00},
                {nome: "Ypióca - Litro", valor: 12.00},
                {nome: "Pitú - Litro", valor: 12.00},
                {nome: "Dreher", valor: 32.00},
                {nome: "Black & White", valor: 55.00},
                {nome: "Vodka Skyy", valor: 50.00},
                {nome: "Caranguejo Ouro- Lata", valor: 8.00},
                {nome: "Caranguejo Prata - Lata", valor: 8.00},
                {nome: "Ypióca - Lata", valor: 8.00},
                {nome: "Pitú - Lata", valor: 8.00},
            ]
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
            <h2>Menu de Bebidas</h2>
            {itens.map((item, index) =>(
                <div key={index}>
                    <h3>{item.tipo}</h3>
                    <ul>
                        {item.opcoes.map((opcao, opcaoIndex) =>(
                            <li key={opcaoIndex}>
                                {opcao.nome} - {opcao.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                                <button onClick={() => selecionarItem(opcao)}> Adicionar ao Carrinho</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </React.Fragment>

    );
};

export default Bebidas;
