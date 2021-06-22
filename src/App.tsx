import { Auth } from './components/AuthPage';
import { Aside } from './components/Aside';
import { Home } from './pages/home/Home';

function App() {
	return (
		<Auth>
			<Aside />
			<Home />
		</Auth>
	)
}

export default App;
