import React, { useState, createContext, useContext } from "react";

// Criando o contexto do carrinho
const CarrinhoContext = createContext();

const Bebidas = () => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (item) => {
        setCarrinho([...carrinho, item]);
    };

    const removerDoCarrinho = (item) => {
        const novoCarrinho = carrinho.filter((c) => c !== item);
        setCarrinho(novoCarrinho);
    };

    const bebidas = [
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

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
            <React.Fragment>
                <h2>Menu de Bebidas</h2>
                <ul>
                    {bebidas.map((item, index) => (
                        <li key={index}>
                            <span>{item.nome} - R${item.valor.toFixed(2)}</span>
                            <button onClick={() => adicionarAoCarrinho(item)}>Adicionar ao Carrinho</button>
                        </li>
                    ))}
                </ul>
                <Carrinho />
            </React.Fragment>
        </CarrinhoContext.Provider>
    );
};

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

export default Bebidas;
