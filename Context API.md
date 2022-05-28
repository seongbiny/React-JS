# Context API

context는 컴포넌트 안에서 전역적으로 데이터를 공유하도록 나온 개념

로그인 데이터, 웹 내 사용자가 쓰는 설정파일, 테마, 언어 등 다양하게 컴포넌트간 공유되어야할 데이터로 사용하면 좋다.

#### Context는 꼭 필요할때만!

* Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다.
* Prop drilling을 피하기 위한 목적이라면 Component Composition (컴포넌트 합성)을 먼저 고려해보자

### Context 문법으로 props 없이 state 공유하기

* src 디렉토리에 context 디렉토리를 만든 뒤 그 안에 새로 파일을 만들거나, 최상위 컴포넌트에 바로 입력해도 된다.
* context의 이름은 아무거나 상관이 없고, 하위에서 import로 받아오기 위해 export 시킨다.

```jsx
export const MyContext = React.createContext(defaultValue);

<MyContext.Provider value={/* 어떤 값 */}></MyContext.Provider>
```



```jsx
import React from 'react';

export let ColorContext = React.createContext({ color: 'red'});

function Color(){
    return (
        <div>안녕</div>
    )
}

export default Color;
```

### 최상위 컴포넌트에서 Provider로 감싸기

* Context API의 데이터에 접근해야 하는 하위 컴포넌트를 return 안에서 Provider로 감싸기
* 전달할 데이터는 value={} 안에 객체 형태로 넣기

```jsx
// App.js
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Color, { ColorContext } from './Color';

function App(){
    const color = 'red';
    return (
    <BrowserRouter>
      <ColorContext.Provider value={color}>
        <Route path="/color" component={Color} />
        <Route path="/home" component={Home} />
      </ColorContext.Provider>
    </BrowserRouter>
    )
}

export default App;
```

### 하위 컴포넌트에서 context API 설정하기

* useContext hooks를 불러온다.
* 설정했던 context를 import 한다.
* useContext를 사용하여 value 값을 가져온다.

```jsx
// Home.js

import React, { useContext } from 'react';
import { ColorContext } from './Color';

function Home(){
    let color = useContext(ColorContext);
    
    return (
    	<div>
        	<span>{color}색 입니다.</span>
        </div>
    )
}
export default Home;
```

