import {createRoot} from "react-dom/client"
import Main from "./src/Main"

function App(){
    return <Main />
}

const rootNode = createRoot(document.querySelector("#root"));

rootNode.render(<App />);
