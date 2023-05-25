import React from 'react';
import "./Momentos.css"
class Momento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        this.verificarStatusHorario();
        // Verificar o status do horário assim que o componente for montado
    }

    verificarStatusHorario() {
        const dataAtual = new Date();
        const diaSemana = dataAtual.getDay();
        const hora = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();
        console.log(`${hora}:${minutos}`)
        const horarioFuncionamento = {
            semana: {
                inicio: { hora: 10, minutos: 30 },
                fim: { hora: 21, minutos: 30 }
            },
            fimDeSemana: {
                inicio: { hora: 10, minutos: 0 },
                fim: { hora: 22, minutos: 0 }
            }
            
        };

        const horarioAberturaSemana = new Date();
        horarioAberturaSemana.setHours(horarioFuncionamento.semana.inicio.hora);
        horarioAberturaSemana.setMinutes(horarioFuncionamento.semana.inicio.minutos);

        const horarioFechamentoSemana = new Date();
        horarioFechamentoSemana.setHours(horarioFuncionamento.semana.fim.hora);
        horarioFechamentoSemana.setMinutes(horarioFuncionamento.semana.fim.minutos);

        const horarioAberturaFimDeSemana = new Date();
        horarioAberturaFimDeSemana.setHours(horarioFuncionamento.fimDeSemana.inicio.hora);
        horarioAberturaFimDeSemana.setMinutes(horarioFuncionamento.fimDeSemana.inicio.minutos);

        const horarioFechamentoFimDeSemana = new Date();
        horarioFechamentoFimDeSemana.setHours(horarioFuncionamento.fimDeSemana.fim.hora);
        horarioFechamentoFimDeSemana.setMinutes(horarioFuncionamento.fimDeSemana.fim.minutos);

        if (
            (diaSemana >= 1 && diaSemana <= 5 && hora >= horarioAberturaSemana.getHours() && hora <= horarioFechamentoSemana.getHours()) ||
            ((diaSemana === 0 || diaSemana === 6) && hora >= horarioAberturaFimDeSemana.getHours() && hora <= horarioFechamentoFimDeSemana.getHours())
        ) {
            this.setState({ isOpen: true });
        }
    }

    render() {
        const { isOpen } = this.state;

        return (
            <div className='HorariosFuncionamento'>
                <h2>Horários de Funcionamento:</h2>
                <ul>
                    <li><span className="horarios">Segunda à Sexta - 10:30 às 21:30</span></li>
                    <li><span className="horarios"> Sábado e Domingo - 10:00 às 22:00</span></li>
                </ul>
               
                <span style={{ backgroundColor: isOpen ? 'green' : 'red', color: 'white', padding: '5px' }}>{isOpen ? 'Aberto!' : 'Fechado!'}</span>
            </div>
        );
    }
}

export default Momento;
