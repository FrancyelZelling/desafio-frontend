import React from 'react';
import CepInput from './Components/CepInput';
import { Capitais } from './Components/Capitais'

import './index.scss'

function App() {
  return (
    <div className="App">
      <CepInput />
      <Capitais />
    </div>
  );
}

export default App;
