import React from 'react';
import { Componente1 } from './Componente1';
import { Componente2 } from './Comp2';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Switch>
        <Route path="/exemplo1" component={Componente1} />
        <Route path="/exemplo2" component={Componente2} />
        <Route path="*" component={Componente1} />
      </Switch>
    </div>
  );
}

export default App;
