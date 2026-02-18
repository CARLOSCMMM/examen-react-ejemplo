import { useEffect, useState } from "react";

function EventList() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/eventos")
        .then(res => res.json())
        .then(data => setEventos(data))
        .catch(err => console.error("error al cargar los datos", err))
    })

    const borrarEvento = (id) => {
        const validacion = window.confirm("Seguro que quieres borar el evento?");
        if (!validacion) {
            return;
        }
        fetch(`http://localhost:3000/eventos/${id}`, {
            method: "DELETE"
        })
    }
    return(
        <div>
            <h1>Listado de eventos</h1>
            <p>Total de evetos: {eventos.length}</p>

            {eventos.map(evento => (
                <div>
                    <h2>{evento.title}</h2>
                    <p>{evento.description}</p>
                    <img src={evento.image}/>

                    <button onClick={() => borrarEvento(evento.id)}>Borrar</button>
                </div>
            ))}
        </div>
    )
}

export default EventList;