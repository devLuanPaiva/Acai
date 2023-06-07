import React, { useState, useEffect } from 'react';
import "./Momentos.css"
const Momento = () => {
    const [date, setDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    });

    const tick = () => {
        setDate(new Date());
        setIsOpen(checkIfOpen(date));
    };

    const checkIfOpen = (date) => {
        const day = date.getDay();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Verificar se é sábado ou domingo
        if (day === 0 || day === 6) {
            if ((hours === 10 && minutes >= 0) || (hours === 22 && minutes === 0)) {
                return true;
            }
        }

        // Verificar se é segunda a sexta
        if (day >= 1 && day <= 5) {
            if ((hours === 10 && minutes >= 30) || (hours === 21 && minutes >= 30)) {
                return true;
            }
        }

        return false;
    };
    return (
        <div className='HorariosFuncionamento'>
            <h2>Horários de Funcionamento:</h2>
            <ul>
                <li><span className="horarios">Segunda a Sexta - 10:30 às 21:30</span></li>
                <li><span className="horarios"> Sábado e Domingo - 10:00 às 22:00</span></li>
            </ul>

            <span style={{ backgroundColor: isOpen ? 'green' : 'red', color: 'white', padding: '5px' }}>{isOpen ? 'Aberto!' : 'Fechado!'}</span>
        </div>
    );

}

export default Momento;
