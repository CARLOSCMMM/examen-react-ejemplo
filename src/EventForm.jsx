import { useEffect, useState } from "react";

function EventForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title || !description) {
            console.log("Los dos campos son obligatorios");
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
            console.log("añadido correctamente", data);
            setTitle("");
            setDescription("");
        })
    }
    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <label>Titulo</label>
                <input type="text" value={title} placeholder="Titulo" onChange={e => setTitle(e.target.value)}/>

                <label>Descripcion</label>
                <input type="text" value={description} placeholder="Descripcion" onChange={e => setDescription(e.target.value)}/>

                <button type="submit">Añadir</button>
            </form>
        </div>
    )
}

export default EventForm;