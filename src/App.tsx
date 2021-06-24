import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { NewRoom } from './pages/Room/NewRoom';
import { Room } from './pages/Room/Room';

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/rooms/new" component={NewRoom} />
					<Route path="/rooms/:id" component={Room} />
				</Switch>
			</AuthContextProvider>
		</BrowserRouter>
	)
}

export default App;
