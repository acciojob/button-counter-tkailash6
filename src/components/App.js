
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
const [count,setCount]=useState(0)

function click(){
  setCount(count+1)
}
console.log(count)
  return (
    <div>
        {/* Do not remove the main div */}
         <p>Button clicked {count} times</p>
        <button onClick={click}>Click me</button>
    </div>
  )
}

export default App
