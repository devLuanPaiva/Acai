import React, { useState } from 'react';
import Header from "../header/Header";
import Momento from "../momentoAtual/Momento";
import Navegacao from "../navegacao/Navegacao";

const MontarAcai = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedAddons, setSelectedAddons] = useState([]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setSelectedAddons([]);
    };

    const handleAddonChange = (addon) => {
        if (selectedAddons.includes(addon)) {
            setSelectedAddons(selectedAddons.filter((item) => item !== addon));
        } else {
            setSelectedAddons([...selectedAddons, addon]);
        }
    };

    const renderOptions = () => {
        const options = [
            {
                title: 'Açaí no copo',
                items: [
                    { size: 'Açaí 300ml', maxAddons: 3 },
                    { size: 'Açaí 400ml', maxAddons: 4 },
                    { size: 'Açaí 500ml', maxAddons: 5 },
                    { size: 'Açaí 700ml', maxAddons: 7 },
                ],
            },
            {
                title: 'Açaí na vasilha',
                items: [
                    { size: 'Açaí 250g', maxAddons: 4 },
                    { size: 'Açaí 350g', maxAddons: 5 },
                ],
            },
        ];

        return options.map((optionGroup, index) => (
            <div key={index}>
                <h3>{optionGroup.title}</h3>
                {optionGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value={item.size}
                                checked={selectedOption === item.size}
                                onChange={() => handleOptionChange(item.size)}
                            />
                            {item.size}
                        </label>
                        {selectedOption === item.size && (
                            <div>
                                <p>Escolha até {item.maxAddons} adicionais:</p>
                                {renderAddons(item.maxAddons)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        ));
    };

    const renderAddons = (maxAddons) => {
        const addons = [
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
            // {frutas: ['Morango', 'Kiwi', 'Uva', 'Banana'], coberturas: ['Morango', 'Caramelo', 'Uva', 'Chocolate', 'Nutella']}
        ];
        // const fruits = ['Morango', 'Kiwi', 'Uva', 'Banana'];
        // const toppings = ['Morango', 'Caramelo', 'Uva', 'Chocolate', 'Nutella'];

        const handleCheckboxChange = (addon) => {
            handleAddonChange(addon);
        };

        return (
            <div>
                <h4>Complementos:</h4>
                {addons.map((addon, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={addon}
                            checked={selectedAddons.includes(addon)}
                            disabled={selectedAddons.length >= maxAddons && !selectedAddons.includes(addon)}
                            onChange={() => handleCheckboxChange(addon)}
                        />
                        {addon}
                    </label>
                ))}
            </div>
        );
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <Momento />
                <Navegacao />
                {renderOptions()}
            </main>
        </React.Fragment>
    );
};

export default MontarAcai;
