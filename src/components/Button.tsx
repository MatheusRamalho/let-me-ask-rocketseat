import { useState } from "react";

export function Button() {
    // IMUTABILIDADE
    // - A partir do momento em que uma variável foi criada no estado de um componente, ela não sofre alteração.
    const [counter, setCounter] = useState(0)

    function increments() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increments}> 
            {counter}
        </button>
    );
}