import React, { useState } from 'react';
import Header from '../header/Header';
import Momento from '../momentoAtual/Momento';
import Navegacao from '../navegacao/Navegacao';

const options = [
    {
        title: 'Açaí no copo',
        items: [
            { size: 'Açaí 300ml', maxAdditions: 3 },
            { size: 'Açaí 400ml', maxAdditions: 4 },
            { size: 'Açaí 500ml', maxAdditions: 5 },
            { size: 'Açaí 700ml', maxAdditions: 7 },
        ],
    },
    {
        title: 'Açaí na vasilha',
        items: [
            { size: 'Açaí 250g', maxAdditions: 4 },
            { size: 'Açaí 350g', maxAdditions: 5 },
        ],
    },
];

const extras = [
    'Ovomaltine',
    'Granola',
    'Leite em Pó',
    'Biscoito Oreo',
    'Gotas de Chocolate',
    'M&M',
    'Choco Power',
    'Choco Ball',
    'Amendoim Triturado',
    'Waffle',
    'Bis',
];

const fruits = ['Morango', 'Kiwi', 'Uva', 'Banana'];

const MontarAcai = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedExtras, setSelectedExtras] = useState([]);

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

    return (
        <React.Fragment>
            <Header />
            <main>
                <Momento />
                <Navegacao />
                <h2>Monte seu Açaí</h2>
                {options.map((category, index) => (
                    <div key={index}>
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
                                <label htmlFor={item.size}>{item.size}</label>
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
            </main>
        </React.Fragment>
    );
};

export default MontarAcai;
