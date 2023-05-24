import React from 'react';
import Header from '../header/Header';
import Momento from '../momentoAtual/Momento';
import Navegacao from '../navegacao/Navegacao';

const MilkShake = ({ adicionarItem }) => {
    const itens = [
        {
            tipo: 'Milk Shake', opcoes: [
                { nome: 'Milk Shake de Morango 300ml', valor: 9.99 },
                { nome: 'Milk Shake de Morango 400ml', valor: 11.99 },
                { nome: 'Milk Shake de Ovomaltine 300ml', valor: 9.99 },
                { nome: 'Milk Shake de Ovomaltine 400ml', valor: 11.99 },
                { nome: 'Milk Shake de Uva 300ml', valor: 9.99 },
                { nome: 'Milk Shake de Uva 400ml', valor: 11.99 },
                { nome: 'Milk Shake de Chocolate 300ml', valor: 9.99 },
                { nome: 'Milk Shake de Chocolate 400ml', valor: 11.99 },
            ]
        },
        {
            tipo: 'Milk Shake Especial', opcoes: [
                { nome: 'Milk de Morango + Morango', valor: 13.99 },
                { nome: 'Milk de Chocolate + Raspas de Chocolate', valor: 13.99 },
                { nome: 'Milk de Ovomaltine + Ovomaltine em Pó', valor: 13.99 }
            ]
        },
    ]
    const selecionarItem = (item) => {
        adicionarItem(item);
    };

    return (
        <React.Fragment>
            <Header />
            <Momento />
            <Navegacao />
            {itens.map((item, index) => (
                <div key={index}>
                    <h3>{item.tipo}</h3>
                    <ul>
                        {item.opcoes.map((opcao, opcaoIndex) => (
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

export default MilkShake;
