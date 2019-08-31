import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AgregarCita from './AgregarCita'
import ListadoCitas from './ListadoCitas'

// Redux
import store from '../store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Ejemplo redux Veterinaria</h1>
        </header>

        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6">
            <ListadoCitas />
          </div>
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
