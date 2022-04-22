import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/products' element={<Home/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
		</Routes>
    </div>
  );
}

export default App;
