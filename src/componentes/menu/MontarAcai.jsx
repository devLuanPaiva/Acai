import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Momento from '../momentoAtual/Momento';
import Navegacao from '../navegacao/Navegacao';
import "./MontarAcai.css"
import Footer from '../footer/Footer';
const options = [
    {
        title: 'Açaí no copo',
        items: [
            { size: 'Açaí 300ml ', maxAdditions: 3, valor: 8.50 },
            { size: 'Açaí 400ml ', maxAdditions: 4, valor: 9.50 },
            { size: 'Açaí 500ml ', maxAdditions: 5, valor: 11.99 },
            { size: 'Açaí 700ml ', maxAdditions: 7, valor: 13.99 },
        ],
    },
    {
        title: 'Açaí na vasilha',
        items: [
            { size: 'Açaí 250g', maxAdditions: 4, valor: 7.50 },
            { size: 'Açaí 350g', maxAdditions: 5, valor: 8.50 },
        ],
    },
];

const extras = [
    ' Ovomaltine',
    ' Granola',
    ' Leite em Pó',
    ' Biscoito Oreo',
    ' Gotas de Chocolate',
    ' M&M',
    ' Choco Power',
    ' Choco Ball',
    ' Amendoim Triturado',
    ' Waffle',
    ' Bis',
];

const fruits = [' Morango', ' Kiwi', ' Uva', ' Banana'];
const cremes = [
    {
        title: 'Cremes',
        items: [
            { nome: 'Creme Oreo ', valor: 2.50 },
            { nome: 'Creme Ninho ', valor: 2.50 },
            { nome: 'Creme Ovomaltine ', valor: 2.50 },
            { nome: 'Creme Cookies ', valor: 2.50 },
        ]
    }
]
const MontarAcai = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [selectedCremes, setSelectedCremes] = useState(null)
    const [acaiMontado, setAcaiMontado] = useState(null)

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSelectedExtras([]);
       
    };
    const handleCreme = (opcao) => {
        setSelectedCremes(opcao)
    }

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
                selectedCremes: selectedCremes
              };
              setAcaiMontado(dados)
        }
        acai()
    }, [selectedOption, selectedExtras, selectedCremes])
    const enviarAcai = () => {
        console.log(acaiMontado);
        const mensagem = `AÇAÍ MONTADO: \n\nTipo: ${acaiMontado.selectedOption.size}\nAdicionais: ${acaiMontado.selectedExtras} \n`;
        let mensagemCreme = '';
        if (acaiMontado.selectedCremes != null) {
            mensagemCreme = `Creme: ${acaiMontado.selectedCremes.nome}`;
        }
        const numeroWhatsApp = '+558498088539';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem + mensagemCreme)}`;
        window.open(url, '_blank');
    }
    
    return (
        <React.Fragment>
            <Header />
            <main className='montarAcai'>
                <Momento />
                <Navegacao />
                <h2>Monte seu Açaí</h2>
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
                                    <label htmlFor={item.size}>{item.size} - Escolha até {item.maxAdditions} Adicionais - {item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                {cremes.map((categoryCreme, indexCreme) => (
                    <div key={indexCreme}>
                        <h3>{categoryCreme.title}</h3>
                        {categoryCreme.items.map((itemCreme, indexCreme) => (
                            <div key={indexCreme}>
                                <input
                                    type="radio"
                                    name='opcao'
                                    id={itemCreme.nome}
                                    checked = {selectedCremes === itemCreme}
                                    onChange={() => handleCreme(itemCreme)}
                                />
                                <label htmlFor={itemCreme.nome}>{itemCreme.nome} - {itemCreme.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</label>
                            </div>

                        ))}
                    </div>
                ))}
                {selectedOption && (
                    <div>
                        <h4>Complementos:</h4>
                        {extras.map((extra, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={extra}
                                    value={extra}
                                    checked={selectedExtras.includes(extra)}
                                    onChange={handleExtraChange}
                                    disabled={selectedExtras.length >= selectedOption.maxAdditions && !selectedExtras.includes(extra)}
                                />
                                <label htmlFor={extra}>{extra}</label>
                            </div>
                        ))}
                        <h4>Frutas:</h4>
                        {fruits.map((fruit, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={fruit}
                                    value={fruit}
                                    checked={selectedExtras.includes(fruit)}
                                    onChange={handleExtraChange}
                                    disabled={selectedExtras.length >= selectedOption.maxAdditions && !selectedExtras.includes(fruit)}
                                />
                                <label htmlFor={fruit}>{fruit}</label>
                            </div>
                        ))}
                    </div>
                )}
                <button onClick={enviarAcai}>Enviar Açaí</button>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default MontarAcai;
