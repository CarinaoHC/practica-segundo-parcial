import '../styles/Tarea.css';

function Tarea({ texto, funcion }) {
    return (
        <button onClick={funcion}>{texto}</button>
    )
}

export default Tarea;