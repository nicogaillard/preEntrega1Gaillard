import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer titulo="Productos Disponibles:"/>}/>
      <Route path='/categorys/:id' element={<ItemListContainer titulo="Productos Disponibles:"/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
