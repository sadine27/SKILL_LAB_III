import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState("");
  const [message, setMessage] = useState("");
  function greetStudent(){
    setMessage("Hello,"+ name+"! Welcome to React.");
  }
  return(
    <div>
      <h1>Student Greeting App</h1>
      <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.taget.value)} />
      <button onClick={greetStudent}> Greet Me</button>
      <p> {message} </p>
    </div>
  );
}

export default App