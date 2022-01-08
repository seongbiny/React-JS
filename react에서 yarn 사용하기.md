## react에서 yarn 사용하기



## react에서 bootstrap 사용하기



## react에서 react router 사용하기

```
yarn add react-router-dom@5
```

```react
// index.js

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
  document.getElementById('root')
);
```

```react
// App.js

import { Link, Router, Switch } from 'react-router-dom';

function App(){
    return (
    	<div>
            //방법1
        	<Route exact path="/">
            	<div>메인</div>
            </Route>
            //방법2
            <Route path="/detail" component={Card}></Route>
            //방법3
            <Route path="/어쩌구"> <Card/> </Route>
        </div>
    )
}
```

**import/export 문법, import React**

mui emotion

### Link

```react
// App.js

function App(){
    return (
    	<div>
        	<Navbar>
                //방법1
            	<Nav.Link><Link to="/"> Home </Link></Nav.Link>
                //방법2
                <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            </Navbar>
        </div>
    )
}
```

### 다른 방법으로 페이지 이동기능 만들기

코드 실행 중간중간에 페이지를 이동시키고 싶은 경우

페이지 이동 함수 사용

useHistory() 라는 함수를 import 해온다.

```react
// Detail.js

import React from 'react';
import { useHistory } from 'react-router-dom';

function Detail(){
  let history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
          <button onClick={()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> 
        </div>
      </div>
  </div>  
  )   
}
```

1. import
2. let history goBack() 함수 사용 => 이런 라이브러리 사용법은 찾아서 읽거나 검색해봐야 알 수 있음

`onClick={()=>{ history.goBack() }` 뒤로가기

`onClick={()=>{ history.push('/') }` 그 경로로 이동



### Switch 컴포넌트

**매치되는 <Route>들을 전부 보여주지 말고 한번에 하나씩만 보여주세요**

```react
// App.js

function App(){
  return (
    <div>
      <나머지HTML/>
      <Switch>
        <Route exact path="/">
          어쩌구
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/:id">
          <div>새로 만든 route입니다</div>
        </Route>
      </Switch>
    </div>
  )
}
```

Route태그들을 Switch로 감싸준다 그럼 **맨 위의 Route 하나만 보여줌**

