import React, {useState} from 'react';
import Tarea from './Tarea';
import '../styles/Lista.css';

function Lista() {
    const [controlIndice, setcontrolIndice] = useState("");
    const [arrayDeCiudades, setCiudades] = useState([]);
    const [input, setInput] = useState("");
    const addCity = () => {
        setCiudades(prev => [...prev, {id: controlIndice, nombre: input}])
        setcontrolIndice(prev => prev + 1)
    }
    const handleDelete = (indice) => {
        // borrar el elemento numero COSA del array
        setCiudades(
            arrayDeCiudades.filter(ciudad => ciudad.id !== indice)
        );
    }
    return (
        <div className='container'>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <Tarea texto="Add" funcion={addCity} />
            <ul>
                {arrayDeCiudades.map((ciudad, indice) => (
                    <li key={indice}>{ciudad.nombre}<Tarea texto="x" funcion={() => handleDelete(ciudad.id)}/></li>
                ))}
            </ul>
        </div>
    )
}

export default Lista;