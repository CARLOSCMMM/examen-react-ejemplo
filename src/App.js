import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import EventForm from './EventForm';
import EventEdit from './EventEdit';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Pagina inicial|</Link>
      <Link to="/eventos">Eventos|</Link>
      <Link to="nuevo">Nuevo</Link>
    </nav>

    <Routes>
      <Route path='/' element={<h1>Pagina de inicio</h1>}></Route>
      <Route path='/eventos' element={<EventList></EventList>}></Route>
      <Route path='/nuevo' element={<EventForm></EventForm>}></Route>
      <Route path='/editar/:id' element={<EventEdit></EventEdit>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
