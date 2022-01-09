# Redux

#### redux를 쓰는 이유

1. props 전송 없이도 모든 컴포넌트들이 state를 사용할 수 있게 만들어준다.

```
yarn add redux react-redux
```

```react
// index.js

import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
```

**셋팅1. Provider import**

**셋팅2. 내가 state값 공유를 원하는 컴포넌트를 다 감싸준다.**

```
<Provider>
  <App/>
</Provider>
```

<App>컴포넌트와 그 안에있는 모든 HTML, 컴포넌트들은 전부 state를 직접! props 전송없이! 사용할 수 있다.

**셋팅3. redux에서 state를 하나 만드려면 createStore() 함수를 써야한다.**

```react
// index.js

import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(()=>{ return [{id : 0, name : '멋진신발', quan : 2}]  }) // 콜백함수에는 내가 원하는 state 초기값 return

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
```

**셋팅4. <Provider>에 만든 state를 props처럼 등록하면 끝**

```react
// index.js

import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(()=>{ return [{id : 0, name : '멋진신발', quan : 2}]  })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
```

redux 설치 후엔 state들을 store 라고 부른다.

### store에 있는 state 데이터 꺼내쓰는 법

그냥 쓸 수 X store 안에 있는 데이터를 props의 형태로 등록해야 사용가능

```react
// Cart.js

import {connect} from 'react-redux';
function Cart(){
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table>
    </div>
  )
}

function state를props화(state){
  return {
    state : state
  }
}

export default connect(state를props화)(Cart);
```

1. store 데이터 사용을 원하는 컴포넌트 .js 파일 밑에 function을 하나 만든다.
   * store 안에 있던 state를 props로 만들어주는 역할
   * return 안에 `{ 자유작명 : state }` 적어준다.
   * store 안에 있던 모든 state 데이터가 props로 등록된다.
   * Cart.js 에서 {자유작명}을 출력해보면 아까 저장해뒀던 redux내의 장바구니 state가 출력된다.
2. export default 하던 부분에 connect() 적는다. (connect 함수는 import 해와야 함)

이제 state를 props처럼 사용하면 됨



**셋팅**

1. index.js에 <Provider>를 import 해온 다음
2. state 값 공유를 원하는 컴포넌트를 감싼다.
3. createStore를 import 해온 다음 사용법에 의해 state를 만들어 let store라는 변수에 저장한다.
4. <Provider store={store}> 이렇게 store를 등록하면 **Provider로 감싼 컴포넌트는 전부 store안에 있던 값을 props없이 공유 가능하다.**



**store안에 있던 state 사용**

원하는 컴포넌트 파일로 간다.

1. 하단에 function state를props화() 만들고 state를 props로 등록한다.
2. 하단에 export default connect(state를props화)(Cart); 
   이제 아까 만들어둔 state가 props로 등록이 된 것.
   **props.state이름** 이렇게 저장된 state를 자유롭게 사용할 수 있다.



### state 데이터를 수정하고 싶을 때

1. reducer 함수를 만들고 그 곳에 데이터 수정하는 방법을 정의해놈
2. 원하는 곳에서 dispatch() 라는 함수를 써서 reducer에게 수정해달라고 요청

### 데이터 수정하는 reducer 만드는 법

