import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
	return (
			<Routes>
        <Route path='/' element={<Home />} />
        <Route path='finder' element={'Fuck off'} />
      </Routes>
	);
}

export default App;
