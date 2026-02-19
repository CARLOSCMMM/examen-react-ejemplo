import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function EventList() {
   const [eventos, setEventos] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
    fetch("http://localhost:3000/eventos")
    .then(res => res.json())
    .then(data => setEventos(data))
    .catch(err => console.error("Error al cargar los archivos", err))
   })

   const eliminarEvento = (id) => {
    const confirmacion = window.confirm("Seguro que quieres elimianr el evento?")

    if (!confirmacion) {
        return;
    }

    fetch(`http://localhost:3000/eventos/${id}`, {
        method: "DELETE"
    }).then(() => setEventos(eventos.filter(e => e.id !== id)))
   }
   return (
    <div>
        <h1>Listado de eventos</h1>
        <p>Total de eventos: {eventos.length}</p>

        {eventos.map(evento => (
            <div key={evento.id}>
                <h2>{evento.title}</h2>
                <p>{evento.description}</p>
                <img src={evento.image}/>

                <button onClick={() => eliminarEvento(evento.id)}>Eliminar</button>
                <button onClick={() => navigate(`/editar/${evento.id}`)}>Editar</button>
            </div>
        ))}
    </div>
   )
}

export default EventList;