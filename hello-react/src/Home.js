import React, { useContext } from 'react';
import { ColorContext } from './Color';


function Home(){
    let color = useContext(ColorContext);
    
    return (
    	<div>
        	<span>{color}색 입니다.</span>
        </div>
    )
}
export default Home;