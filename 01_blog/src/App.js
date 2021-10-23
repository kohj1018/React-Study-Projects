/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, titleModify] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likeCnt, likeCntModify] = useState([0, 0, 0])
  let posts = '강남 고기 맛집';

  function titleChange() {
    var newArray = [...title];        // deep copy
    newArray[0] = '여자 코트 추천';
    titleModify( newArray );
  }

  function likeCntUp(i) {
    var newArray = [...likeCnt];        // deep copy
    newArray[i] += 1;
    likeCntModify( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ titleChange }>버튼</button>
      <div className="list">
        <h3> { title[0] } </h3>
        <p>2월 17일 발행 <span className="likeBtn" onClick={ () => {likeCntUp(0)} }>💓</span> { likeCnt[0] } </p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>2월 18일 발행 <span className="likeBtn" onClick={ () => {likeCntUp(1)} }>💓</span> { likeCnt[1] } </p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>2월 19일 발행 <span className="likeBtn" onClick={ () => {likeCntUp(2)} }>💓</span> { likeCnt[2] } </p>
        <hr />
      </div>

      <Modal></Modal>   {/* React의 Component 문법 */}

    </div>
  );

  // React의 Component 문법
  // Component 유의사항 1. 이름은 대괄호
  //                    2. return() 안은 태그 하나로 묶어야함.
  // 
  // 반복 출현하는 HTML 덩어리들, 자주 변경되는 HTML UI들, 다른 페이지 만들 때
  // Component로 만드는 것이 좋다.
  // (단점은 state를 쓸 때 복잡해진다는 점이다.)
  // (상위 component에서 만든 state를 쓰려면 props 문법을 이용해야한다.)
  function Modal() {  
    return(
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }
}

export default App;
