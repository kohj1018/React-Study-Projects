import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault(); // form 태그에서는 submit할 때 자동으로 새로고침하는데 그 동작을 막아줌.
    console.log(username, password)
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // e.target은 이 input을 가리킴
        /><br />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
 
export default App;
