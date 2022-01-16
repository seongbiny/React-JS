import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Color, { ColorContext } from './Color';


function App(){
    const color = 'blue';

    return (
    <BrowserRouter>
      <ColorContext.Provider value={color}>
        <Route path="/color" component={Color} />
        <Route path="/home" component={Home} />
      </ColorContext.Provider>
    </BrowserRouter>
    )
}

export default App;