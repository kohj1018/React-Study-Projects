import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// BrowserRouter는 react-router-dom를 적용하고 싶은 컴포넌트에 
// 최상위 컴포넌트를 감싸주는 wrapper 컴포넌트이다.
// useParams는 hook을 사용하기 위함.
import { BrowserRouter, Route, Switch, Link, NavLink, useParams } from 'react-router-dom';

function Home() {
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  {id: 1, title: 'HTML', description: 'HTML is ...'},
  {id: 2, title: 'JS', description: 'JS is ...'},
  {id: 3, title: 'React', description: 'React is ...'},
]

function Topic() {
  var params = useParams();
  console.log('params', params);  // hook을 이용한 것으로 params에 topic_id가 들어온다.
  var topic_id = params.topic_id;
  var selected_topic = {
    // 초기값
    title: 'Sorry',
    description: 'Not Found'
  }
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{ selected_topic.title }</h3>
      { selected_topic.description }
    </div>
  )
}

function Topics() {
  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    // li 태그에 key를 줘야 에러가 안난다.
    lis.push(<li key={contents[i].id}><NavLink to={ '/topics/' + contents[i].id }>{ contents[i].title }</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      {/* 라우터 안에 라우터를 중첩해서 사용 가능 */}
      <ul>
        {/* for 문을 사용해서 코드를 더 간결하게 만듦. */}
        {lis}
      </ul>

      {/* Switch 사용 대신에 하나의 Route 태그로 표현하는 법 */}
      {/* /topics/ 그리고 뒤에 topic에 해당하는 id를 가진 path의 route가 들어오는 경우 */}
      <Route path="/topics/:topic_id">
        {/* 아래에서는 Switch문과 Route를 topic의 개수만큼 수동으로 만들었는데,
            위에처럼 파라미터를 받기위한 위치에 :와 같은 기호를 이용해 :topic_id와 같이 만들면
            해당 자리에 들어오는 값을 Topic 컴포넌트로 전달한다.
            전달되는 값을 받기 위해서는 Topic 컴포넌트에서 useParams를 쓰면 된다.
            그럼 그 값에 따라서 동적으로 동작하는 페이지를 만들 수 있다. */}
        <Topic></Topic>
      </Route>

      
    </div>
  )
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}


function App() {
  return(
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        {/* Link 태그를 사용하면 a태그와 다르게 페이지를 아예 새로 리로드하지 않고 불러온다. */}
        {/* NavLink는 Link에 조금 기능이 추가된 태그이다.
            NavLink를 이용하면 클릭된 태그에 active라는 클래스가 생기고 이를 이용할 수 있다.(css로 꾸미기 등) */}
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      
      {/* 아래의 것들을 react-router-dom에게 알려줌 */}
      
      {/* exact는 정확히 그 path 일때만 컴포넌트가 라우팅 된다.
          만약 exact를 안써주면 topics를 누를때도 Home 컴포넌트도 라우팅된다. */}
      {/* 근데 이런 exact를 안써주는 방법도 있는데 바로 Switch 컴포넌트를 이용하는 것이다.
          Switch는 제일 먼저 걸리는애만 출력하고 나머지는 버린다.
          따라서 만약 Home을 맨 뒤로 놓는다면 exact를 안써도된다. */}
      {/* Switch를 이용하면 사용자가 주소를 잘못 입력했을 경우의 페이지도 만들 수 있는데,
          아래와 같이 하면 된다. */}
      
      
      <Switch>
          {/* 사용자가 이 웹사이트에 아무런 path도 지정하지 않고 들어왔을때는 Home Component를 라우팅 */}
          <Route exact path="/"><Home></Home></Route>
          {/* 사용자가 topics를 누르면 Topics Component를 라우팅 */}
          <Route path="/topics"><Topics></Topics></Route>
          {/* 사용자가 contact 누르면 Contact Component를 라우팅 */}
          <Route path="/contact"><Contact></Contact></Route>
          {/* 사용자가 잘못 들어왔을 때 */}
          <Route path="/">Not Found</Route>
      </Switch>
      
      
    </div>
  )
}

ReactDOM.render(
  // App이라고 하는 컴포넌트는 BrowserRouter를 사용할 수 있는 상태가 되었다.
  <BrowserRouter> <App /> </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
