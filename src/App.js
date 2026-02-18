import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import EventList from './EventList';
import EventForm from './EventForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<h2>Pagina Principal</h2>}></Route>
      <Route path='eventos' element={<EventList></EventList>}></Route>
      <Route path='nuevo' element={<EventForm></EventForm>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
