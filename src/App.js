import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event){
    event.preventDefault();
    const response= await fetch('http://localhost:1337/api/register', {
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({name,email,password})
    })
    const data=await response.json();
    console.log(data);
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
