import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CursosScreen } from '../pages/cursos';
import { ContatoScreen } from '../pages/contato';

export class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/cursos" component={CursosScreen} />
                <Route path="/contato" component={ContatoScreen} />
                <Route path="*" component={CursosScreen} />
            </Switch>
        );
    }
}


