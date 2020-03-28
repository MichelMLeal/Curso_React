import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Menu } from './components/menu';
import { Routes } from './components/routes';

function App() {
  return (
    <div>
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
