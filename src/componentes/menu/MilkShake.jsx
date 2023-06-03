import React from 'react';
import Header from '../header/Header';
import Momento from '../momentoAtual/Momento';
import Navegacao from '../navegacao/Navegacao';
import "./MilkShake.css"
import Footer from '../footer/Footer';
const MilkShake = ({ adicionarItem }) => {
    const itens = [
        {
            tipo: 'Milk Shake', opcoes: [
                // { nome: 'Milk Shake de Morango 300ml', valor: 9.99, quantidade: 1},
                { nome: 'Milk Shake de Morango 400ml', valor: 11.99, quantidade: 1 },
                // { nome: 'Milk Shake de Ovomaltine 300ml', valor: 9.99 , quantidade: 1},
                { nome: 'Milk Shake de Ovomaltine 400ml', valor: 11.99, quantidade: 1 },
                // { nome: 'Milk Shake de Chocolate 300ml', valor: 9.99, quantidade: 1},
                { nome: 'Milk Shake de Chocolate 400ml', valor: 11.99, quantidade: 1 },
                // { nome: 'Milk Shake de Uva 300ml', valor: 9.99, quantidade: 1},
                { nome: 'Milk Shake de Uva 400ml', valor: 11.99, quantidade: 1 },
            ]
        },
        {
            tipo: 'Milk Shake Especial', opcoes: [
                { nome: 'Milk Shake de Chocolate + Raspas de Chocolate', valor: 13.00, quantidade: 1 },
                { nome: 'Milk Shake de Ovomaltine + Ovomaltine em Pó', valor: 13.00, quantidade: 1 },
                { nome: 'Milk Shake de Morango + Morango', valor: 13.00, quantidade: 1 },
            ]
        },
    ]
    const selecionarItem = (item) => {
        adicionarItem(item);
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <Momento />
                <Navegacao />
                <h2>Menu de Milk Shakes</h2>
                <section className="milkshakes">
                    {itens.map((item, index) => (
                        <div key={index} className='sectionMilks'>
                            <h3>{item.tipo}</h3>
                            <ul>
                                {item.opcoes.map((opcao, opcaoIndex) => (
                                    <li key={opcaoIndex}>
                                        {opcao.nome} <br /> {opcao.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                        <br />
                                        <button onClick={() => selecionarItem(opcao)} className="adicionar"> Comprar</button>
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

export default MilkShake;
