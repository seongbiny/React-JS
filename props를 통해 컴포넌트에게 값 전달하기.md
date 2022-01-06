## props를 통해 컴포넌트에게 값 전달하기

App 컴포넌트에서 Hello 컴포넌트를 사용할 때 `name`이라는 값을 전달해주고 싶다면 ? 

```react
// App.js

import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" />
  );
}

export default App;
```

```react
// Hello.js

import React from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>
}

// defaultProps로 기본 값 설정
Hello.defaultProps = {
  name: '이름없음'
} 

export default Hello;
```



컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐 `props.childern`

```react
// Wrapper.js

import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
```

```react
// App.js

import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
```



리액트에서 엘리먼트에 이벤트를 설정해줄 때

`on이벤트이름={실행하고싶은함수}`