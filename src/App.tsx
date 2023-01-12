import React from 'react'; 
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes , Route  } from 'react-router-dom';
import Listado from './pages/listado'
import './App.css';

function App() {
  return (

    <div className="App">
        <Router>
            <div>
               
               <Routes>
                  <Route path='/' element={<Listado />} />
               </Routes>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
