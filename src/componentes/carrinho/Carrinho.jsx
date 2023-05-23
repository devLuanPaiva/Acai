import React from "react";

const Carrinho = ({ itens, removerItem }) => {
    return (
        <React.Fragment>
            <h3>Carrinho de Compras</h3>
            {itens.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <ul>
                    {itens.map((item, index) => (
                        <li key={index}>
                            {item.nome} - R${item.valor.toFixed(2)}
                            <button onClick={() => removerItem(item)}>Remover do Carrinho</button>
                        </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    );
};

export default Carrinho;
