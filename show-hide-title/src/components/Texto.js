import React from 'react';
import Boton from './Boton';
import { useState } from "react";

function Texto() {
    const [show, setShow] = useState(true);
    const mostrar = () => {
        setShow(!show);
    }
    return (
        <Boton mostrar={show} funcion={mostrar} />
    );
}

export default Texto;