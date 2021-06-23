import { BrowserRouter, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/auth/Home';
import { NewRoom } from './pages/auth/NewRoom';

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Route path="/" exact={true} component={Home} />
				<Route path="/rooms/new" component={NewRoom} />
			</AuthContextProvider>
		</BrowserRouter>
	)
}

export default App;
