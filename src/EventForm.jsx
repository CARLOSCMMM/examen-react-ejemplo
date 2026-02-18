import { useEffect, useState } from "react";

function EventForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            console.log("el titulo y la descripcion son obligatorios");
            return;
        }

        const nuevoEvento = {
            title,
            description
        }
        fetch("http://localhost:3000/eventos", {
            method: "POST", 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(nuevoEvento)
        }).then(res => res.json())
        .then(data => {
            console.log("Evento guardado correctamente", data);
            setTitle("");
            setDescription("");
        }).catch(err => console.error("error al insertar evento" , err))
    }
    return (
        <div>
            <h1>Formulario</h1>

            <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <input type="text" value={title} placeholder="titulo" onChange={e => setTitle(e.target.value)}/>

                <label>Descripcion</label>
                <input type="text" value={description} placeholder="descripcion" onChange={e => setDescription(e.target.value)}/>

                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default EventForm;