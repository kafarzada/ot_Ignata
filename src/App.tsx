import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import PreJunior from './PreJunior/PreJunior';

export type user = {
  id: string,
  name:string
}


function App() {



  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className={"container"}>
        <Route path={"/prejunior"} component={PreJunior}/>
        </div>
      </div>
    </HashRouter>
  );
};


export default App;
