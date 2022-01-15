import React, { Children } from 'react';
import Hello from './Hello';
import House from './House';

function App(){
  return (
    <div>
      <House>
        <Hello name="react" />
      </House>
    </div>
  )
}

export default App;