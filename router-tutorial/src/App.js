import { Route } from 'react-router-dom';
import Profile from './Profile';

function App(){
    return (
    	<div>
        	<Route path="/profiles/:username" component={Profile} />
    	</div>
   	);
};
export default App;