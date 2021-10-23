import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [byoungwook, setByoungwook] = useState(0);
  useEffect(() => {
    console.log(count)
  }, [count, byoungwook]) // 이렇게 뒤에 ,[변수] 적으면 해당 변수가 변할 때만 useEffect함수가 실행됨.

  useEffect(() => {
    console.log('first rendering')
  }, []) // 이렇게 뒤에 빈 []를 넣으면 최초 1회만 실행되고 실행되지 않음.

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Byoungwook Koh</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setByoungwook(byoungwook + 1)}>Click1</button>
    </div>
  );
}
 
export default App;
