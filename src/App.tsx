import { Home } from './pages/auth/Home';
import { NewRoom } from './pages/auth/NewRoom';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Route path="/" exact={true} component={Home} />
			<Route path="/rooms/new" component={NewRoom} />
		</BrowserRouter>
	)
}

export default App;
