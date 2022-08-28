import { useState } from 'react';
import './style.css'

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
        if (contador === 10) {
            alert("Gostou?")
        }
        if (contador === 50) {
            alert("Ta aqui ainda?")
        }
    }

    return (
        <div>

            <div className='number'>
                {contador}
            </div>
            <button className='btn' onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Contador