import { useState, useEffect } from "react";

const Contador = () => {
    //permite manejar variables de estado a nivel local
    const [contador, setContador]= useState(0);
    const handleContador= () => {setContador(contador +1);};
    const handleReducerContador= () => {setContador(contador -1); };

    //esta funcion especial se ejecuta cuando el componente se montado
    //[] se ejeucta una sola vez
    useEffect(() => {
        setContador(12);
    }, []); 

    //Esta funcion se ejecuta cuando haya cambiado el valor de contador
    //[contador] cada vez se ejecuta cada vez que cambia el contador
    useEffect(() => {
        if(contador ===15) alert("Contador es 15");
    }, [contador])

    //esta funcion especial se ejecuta cuando el componente se desmonta
    useEffect(() => {
        return ()=>{
            console.log("El componente se desmonto")
        }
    })

    return (
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={handleReducerContador}>Disminuir</button>
                
            </div>
        </>
    ); 
};

export default Contador;