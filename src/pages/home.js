import Contador from "./contador"
import './style.css'

function Home() {
    return (
        <div className="container">
            <img src="https://user-images.githubusercontent.com/85580011/181919914-fc5116a7-f510-40f6-9ffa-0ee671ea9ab7.png" alt="GMB" className="App-logo"/>
            <h1 className="App-header">This is my First React App</h1>
            <Contador />
        </div>
    )
}

export default Home