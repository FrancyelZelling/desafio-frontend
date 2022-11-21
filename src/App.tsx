import React from 'react';
import CepInput from './Components/CepInput';
import { Capitais } from './Components/Capitais'

import './index.css'

function App() {
  return (
    <div className="App">
      <h2>Previsão do Tempo</h2>
      <CepInput />
      <Capitais />
    </div>
  );
}

export default App;
