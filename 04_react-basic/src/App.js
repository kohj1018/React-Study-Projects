import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [buttonName, setButtonName] = useState('클릭');
  const clickButton =  () => {
    if (buttonName === '클릭') {
      setButtonName('click2')
    } else {
      setButtonName('클릭')
    }
  };
  return (
    <div className="App">
      <h1>Byoungwook Koh</h1>
      <Counter click='click1'/>
      <Counter click={buttonName}/>
      <Counter/>
      <br />
      <button onClick={clickButton}>버튼 이름 변경</button>
    </div>
  );
}
 
export default App;
