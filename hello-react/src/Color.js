import React from 'react';

export let ColorContext = React.createContext({ color: 'red'});

function Color(){
    return (
        <div>안녕</div>
    )
}

export default Color;