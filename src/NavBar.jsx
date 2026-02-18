import { Link } from "react-router-dom";

function NavBar() {
   return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/eventos">Listado de eventos</Link>
        <Link to="/nuevo">Nuevo Evento</Link>
    </nav>
   )
}

export default NavBar;