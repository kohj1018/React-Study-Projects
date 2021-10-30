import React from 'react';

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) => {
    return (
        // 아래처럼 <>해주면 <div>로 묶어줘서 더럽게 될때 바로 그냥 <input>태그로 연결될 수 있게해줌.
        // <React.Fragment>해줘도 똑같은 효과를 얻을 수 있음.
        <>
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            /><br />
            <div style={{color: 'red'}}>{errorMessage}</div>
        </>
    )
};

export default InputField;