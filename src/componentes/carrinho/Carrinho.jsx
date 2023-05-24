import React from 'react';
import Header from '../header/Header';
import Momento from '../momentoAtual/Momento';
import Navegacao from '../navegacao/Navegacao';

const Carrinho = ({ itens }) => {
    return (
        <div>
            <Header/>
            <Momento/>
            <Navegacao/>
            <h2>Carrinho:</h2>
            {itens.map((item, index) => (
                <div key={index}>
                    <p>Nome: {item.nome}</p>
                    {/* <p>Ingredientes: {item.ingredientes.join(', ')}</p> */}
                    <p>Valor: {item.valor}</p>
                </div>
            ))}
        </div>
    );
};

export default Carrinho;
