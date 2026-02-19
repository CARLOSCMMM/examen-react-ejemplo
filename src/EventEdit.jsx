import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

function EventEdit() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/eventos/${id}`)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title);
            setDescription(data.description);
            setImage(data.image);
        })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            console.log("Falta el titulo o la descripcion");
            return;
        }
        const eventoEditado = {
            title,
            description,
            image
        }
        fetch(`http://localhost:3000/eventos/${id}`, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(eventoEditado)
        }).then(() => navigate("/eventos"))
    }
    return (
        <div>
            <h1>Editar</h1>
            <form onSubmit={handleSubmit}>
                <label>Titulo</label>
                <input type="text" value={title} placeholder="titulo" onChange={e => setTitle(e.target.value)}/>

                <label>Descripcion</label>
                <input type="text" value={description} placeholder="descripcion" onChange={e => setDescription(e.target.value)}/>

                <label>Imagen</label>
                <input type="text" value={image} placeholder="URL de la imagen" onChange={e => setImage(e.target.value)}/>

                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default EventEdit;