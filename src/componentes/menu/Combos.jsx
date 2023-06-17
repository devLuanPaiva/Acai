import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Momento from '../momentoAtual/Momento';
import Navegacao from '../navegacao/Navegacao';
import "./MontarAcai.css"
import Footer from '../footer/Footer';
const options = [
    {
        title: 'Combos com 10% de Desconto',
        items: [
            { size: 'Açaí 300ml ', maxAdditions: 3, valor: 24.30, valorAnterior: 27.00 },
            { size: 'Açaí 400ml ', maxAdditions: 3, valor: 32.40, valorAnterior: 36.00 },
            { size: 'Açaí 500ml ', maxAdditions: 3, valor: 37.80, valorAnterior: 42.00 },
            { size: 'Açaí 700ml ', maxAdditions: 3, valor: 54.00, valorAnterior: 60.00 },
        ],
    },
];

const extras = [
        {
            nome: ' Açaí Sensação',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Ovomaltine,', 'Paçoca,', 'Morango,', 'Nutella.'],
        },
        
        {
            nome: ' Açaí Crocante',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Biscoito Oreo,', 'M&M,', 'Ovomaltine.'],
        },
        {
            nome: ' Açaí da Casa',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Creme Cookies,', 'Banana,', 'M&M,', 'Gotas de Chocolate.'],
        },
        {
            nome: ' Açaí Delicia de Chocolate',
            ingredientes: ['Leite Condensado,', 'Ovomaltine,', 'Gotas de Chocolate,',  'Choco Ball,', 'Biscoito Oreo,', 'Creme Ovomaltine.'],
        },
        {
            nome: ' Açaí Casadinho',
            ingredientes: ['Leite Condensado,', 'Leite em Pó,', 'Nutella,', 'Creme Ninho,', 'Morango.'],
        },
];

const Combos = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [acaiMontado, setAcaiMontado] = useState(null)

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSelectedExtras([]);

    };
    const handleExtraChange = (event) => {
        const { value } = event.target;

        if (selectedExtras.includes(value)) {
            setSelectedExtras(selectedExtras.filter((extra) => extra !== value));
        } else if (selectedExtras.length < selectedOption.maxAdditions) {
            setSelectedExtras([...selectedExtras, value]);
        }
    };

    useEffect(() => {
        const acai = () => {
            const dados = {
                selectedOption: selectedOption,
                selectedExtras: selectedExtras,
            };
            setAcaiMontado(dados)
        }
        acai()
    }, [selectedOption, selectedExtras])
    const enviarAcai = () => {
        console.log(acaiMontado);
        const mensagem = `COMBO DE AÇAÍ: \n\nTipo: ${acaiMontado.selectedOption.size}\nAçaís escolhidos:${acaiMontado.selectedExtras}\nValor: ${acaiMontado.selectedOption.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
        const numeroWhatsApp = '+558498088539';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }

    return (
        <React.Fragment>
            <Header />
            <main className='montarAcai'>
                <Momento />
                <Navegacao />
                <h2>Combos de Açaí</h2>
                {options.map((category, index) => (
                    <div key={index} >
                        <h3>{category.title}</h3>
                        {category.items.map((item, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    name="option"
                                    id={item.size}
                                    checked={selectedOption === item}
                                    onChange={() => handleOptionClick(item)}
                                />
                                <label htmlFor={item.size}>{item.size} - Escolha até {item.maxAdditions} açaís - de <span className="precoDe"><s>{item.valorAnterior.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</s> </span> por <span className="valorAtual">{item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></label>
                            </div>
                        ))}
                    </div>
                ))}

                {selectedOption && (
                    <div>
                        <h4>Açaís:</h4>
                        {extras.map((extra, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={extra.nome}
                                    value={extra.nome}
                                    checked={selectedExtras.includes(extra.nome)}
                                    onChange={handleExtraChange}
                                    disabled={selectedExtras.length >= selectedOption.maxAdditions && !selectedExtras.includes(extra)}
                                />
                                <label htmlFor={extra.nome}>{extra.nome}</label>
                            </div>
                        ))}
    
                    </div>

                )}
                <button onClick={enviarAcai}>Enviar Combo</button>
                <p>OBS: O combo de açaí não vai para o carrinho, ele vai direto para o nosso Whatsapp.</p>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Combos;
