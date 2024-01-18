import { useState } from "react";
import Boton from "./Boton";
import '../styles/Timer.css';

function Timer() {
  const [seg, setSeg] = useState(0);
  const [intervalo, setIntervalo] = useState();

  const play = () => {
    const refer = setInterval(() => {
      setSeg((timer) => timer + 1);
    }, 1000);
    setIntervalo(refer);
  };
  const pause = () => {
    clearInterval(intervalo);
  };
  const reset = () => {
    setSeg(0);
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.floor(seg / 60)} mins </span>
      <span>{Math.round(seg - 60 * Math.floor(seg / 60))} secs</span>
      <div>
        <Boton texto="Start" funcion={play} />
        <Boton texto="Stop" funcion={pause} />
        <Boton texto="Reset" funcion={reset} />

      </div>
    </div>
  );
}

export default Timer;
