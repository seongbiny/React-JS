import { useState } from 'react';

function IterationSample(){
    const [names, setNames] = useState([
        { id: 1, text: '봄' },
        { id: 2, text: '여름' },
        { id: 3, text: '가을' },
        { id: 4, text: '겨울' },
    ]);
    
    const namesList = names.map(name => (
    	<li key={name.id}>
    		{name.text}
    	</li>
    ));
    return <ul>{namesList}</ul>
}

export default IterationSample;