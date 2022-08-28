import { useState } from 'react';
import './style.css'

function Contador() {
    const [contador, setContador] = useState(0);

    function adicionarContador() {
        setContador(contador + 1);
        if (contador === 10) {
            alert("Gostou?")
        }
        if (contador === 50) {
            alert("Ta aqui ainda?")
        }
        if (contador === 100) {
            alert("Tem nada melhor pra fazer?")
        }
        if (contador === 500) {
            alert("Man, ta bem?")
        }
        if (contador === 1000) {
            alert("Pro seu bem, sai mano")
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