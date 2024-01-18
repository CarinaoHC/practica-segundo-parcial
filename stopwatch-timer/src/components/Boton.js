import '../styles/Boton.css';

function Boton({ texto, funcion }) {
    return (
        <button onClick={funcion}>{texto}</button>
    )
}

export default Boton;