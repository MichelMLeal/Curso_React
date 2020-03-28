import React from 'react';
import { Lista } from './Lista';
import { Link } from 'react-router-dom';

export class Componente1 extends React.Component {

    state = {
        escola: 'Impacta',
        cursos: ['React', 'MEAN', "Vue"],
        input: "texto"
    }

    componentDidMount() {
        console.log('Componente foi montado');
        //setTimeout(() => this.setState({ escola: 'Impacta 2020 teste' }), 3000);
    }

    componentDidUpdate() {
        console.log('Componente foi atualizado');
        //setTimeout(() => this.setState({ escola: this.state.escola + '1' }), 500);
    }
    componentWillUnmount() {
        console.log('Componente vai ser desmontado');
    }

    setInput(e) {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Escola: {this.state.escola}</h1>
                <input type="text" valeu={this.state.input} onChange={this.setInput.bind(this)}></input>
                <h2>Cursos:</h2>
                <div>
                    {this.state.cursos.map((curso, i) =>
                        <Lista key={i} informacao={curso} />)}
                </div>
                <Link to="/exemplo2">Teste 2</Link>
            </div>
        );
    }
}