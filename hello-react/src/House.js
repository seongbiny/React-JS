import React from 'react';

function Children({ children }){
    const style = {
        border: '4px solid green',
        padding: '16px',
    };
    return <div style={style}>{children}</div>
}

export default Children;