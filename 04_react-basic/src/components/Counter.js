import React, { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const clickString = props.click || 'Click'; // props.click이 있으면 그걸 받고 없으면 오른쪽 'Click'을 받음
    return(
        <button onClick={increment}>{clickString} {count}</button>
    )
};

export default Counter;