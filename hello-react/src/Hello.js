import React from 'react';

function Hello({name, children}){
    return(
        <div>
            <div>안녕하세요 {name}</div>
            <div>children 값은 {children}입니다.</div>
        </div>
    );
};

export default Hello;