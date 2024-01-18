import '../styles/Boton.css';

function Boton({ mostrar, funcion }) {
    return (
        <div className="container">
            <button onClick={funcion}> Show / Hide</button>
            {mostrar ? <h1>Welcome to React Challenges</h1> : null}
        </div>
    )
}

export default Boton;