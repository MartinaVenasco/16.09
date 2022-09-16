import  { createContext } from 'react';
import { Outlet } from 'react-router-dom';

import  Navbar  from './components/NavBar'

export const CounterContext = createContext(0);

 function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto">
          <Navbar />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}


export default App;
