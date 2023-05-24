import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Momento from '../momentoAtual/Momento';
import Navegacao from '../navegacao/Navegacao';
import "./Carrinho.css"
const Carrinho = ({ itens }) => {
    const [carrinhoItens, setCarrinhoItens] = useState(itens);
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const calcularValorTotal = () => {
            const total = carrinhoItens.reduce((acc, item) => acc + item.valor, 0);
            setValorTotal(total);
        };

        calcularValorTotal();
    }, [carrinhoItens]);

    const removerItem = (index) => {
        const novosItens = [...carrinhoItens];
        novosItens.splice(index, 1);
        setCarrinhoItens(novosItens);
    };

    const enviarMensagemWhatsApp = () => {
        const mensagem = `INFORMAÇÕES DO PEDIDO: \n\n${carrinhoItens
            .map((item) => `Nome: ${item.nome}\nValor: ${item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}\n`)
            .join('\n')}\n\nValor Total: ${valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;

        const numeroWhatsApp = '+558498088539'; // Número do WhatsApp para onde a mensagem será enviada

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <Momento />
                <Navegacao />
                <h2>Carrinho:</h2>
                <section className="itensCarrinho">
                    {carrinhoItens.map((item, index) => (
                        <div key={index} className='iteeem'>
                            <h3>{item.nome}</h3>
                            <p>
                                Valor: {item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            </p>
                            <button onClick={() => removerItem(index)} className="remover">Remover</button>
                        </div>
                    ))}
                </section>
                    <span>Valor Total: {valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                
                <button onClick={enviarMensagemWhatsApp} className='adicionar'>Finalizar Compra</button>
            </main>
        </React.Fragment>
    );
};

export default Carrinho;
