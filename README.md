# React 기초

## JSX

### JSX의 기본 규칙

* 태그는 꼭 닫기

  * 두 개 이상의 태그는 무조건 하나의 태그로 감싸기
  * Fragment <></> 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않음

* JSX 내부에 자바스크립트 변수 

  * {} 로 감싸서 사용

* undefined를 렌더링하지 않기

  * ```jsx
    function App() {
        const name = undefined;
        return name;
    } => XXXXX
    
    function App() {
        const name = undefined;
        return <div>{name || '리액트'}</div> ;
        return name || '값이 undefined입니다.';
    }
    ```

* JSX 에서 style 과 CSS class

  * 인라인 스타일은 객체 형태로 작성 & camelCase 형태로 네이밍
  * class 는 className= 으로 설정

* JSX 내부의 주석

  * {/* */}
  * //

## Component와 Props

어떠한 값을 컴포넌트에게 전달해줘야 할 때 props를 사용한다.

* props: 어떤 컴포넌트를 import 해와서 사용하는 부모(상위) 컴포넌트에서 정하는 값. 부모 컴포넌트에서 설정해서 자식 컴포넌트로 전달하여 자식 컴포넌트에서 쓰인다.
* children: A 컴포넌트 사이에 B 컴포넌트가 있을 때, A 컴포넌트에서 B 컴포넌트 내용을 보여주려고 사용하는 props.

### defaultProps 로 기본값 설정

```jsx
// Hello.js

import React from 'react';

function Hello({ name }) {
    return <div>안녕하세요 {name}</div>
}

Hello.defaultProps = {
    name: '이름 없음'
}

export default Hello;
```

### props.children

컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, `props.children`을 조회하면 된다.

```jsx
// Hello.js

function Hello({ name, children }) {
    return (
    	<div>
        	<div>안녕하세요 {name}</div>
            <div>children 값은 {children}입니다.</div>
        </div>
    )
}
```

```jsx
// App.js

import React from 'react';
import Hello from './Hello';

function App() {
    return <Hello name="react">리액트</Hello>
}
```

### 조건부 렌더링

isTrue 값이 `true`라면 <b>*</b>을, 그렇지 않다면 `null`을 보여주도록 하는 삼항연산자

JSX에서 null, false, undefined를 렌더링하게 된다면 아무것도 나타나지 않게 된다.

```jsx
{ isTrue ? <b>*</b> : null }
{ isTrue && <b>*</b> }
```

보통 삼항연산자를 사용한 조건부 렌더링을 주로 특정 조건에 따라 보여줘야 하는 내용이 다를 때 사용한다. 내용이 달라지는게 아니라, 단순히 특정 조건이 `true`면 보여주고, 그렇지 않다면 숨겨주는 상황에서는 **&& 연산자를 사용해서 처리하는 것**이 더 간편하다.

### state

리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다. props를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 한다. 

함수 컴포넌트에서는 Hooks의 일종인 useState를 이용해서 사용할 수 있다.

```jsx
import React, { useState } from 'react';

const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
});
const { name, nickname } = inputs;
```

리액트에서 객체를 수정해야 할 때에는 직접 수정하면 안됨

```jsx
inputs[name] = value;// XXX

setInputs({
    ...inputs,
    [name]: value
});
```

## 이벤트 핸들링

### 이벤트를 사용할 때 주의 사항

1. 이벤트 이름은 카멜 표기법으로 작성한다.
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
3. DOM 요소에만 이벤트를 설정할 수 있다.
   * div, button, input, form, span 등의 DOM 요소에만 이벤트 설정 가능 
   * 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.

### 이벤트 종류

* https://reactjs.org/docs/events.html

## ref:DOM에 이름 달기

* DOM을 직접 선택해야 하는 상황에서 `ref`를 사용한다.

* 함수형 컴포넌트에서 `ref`를 사용 할 때에는 `useRef`라는 Hook 함수를 사용한다.
* 원하는 위치에 ref={} 의 형태로 작성한다.
* 외부라이브러리 사용할 때 유용하다.

```jsx
const nameInput = useRef();

const onClick = () => {
    nameInput.current.focus();
}

return (
	<input ref={nameInput} />
    <button onClick={onClick}>클릭</button>
)
```

useRef() 를 사용하여 Ref 객체를 만들고, 선택하고 싶은 DOM 에 ref 값으로 설정

Ref 객체의 .current 값은 선택한 DOM 을 가리킴

#### useRef의 또 다른 역할

* 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 관리
* useRef로 관리되는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다.
  * 이 값을 수정 할 때에는 .current 값을 수정, 조회 할 때에는 .current를 조회

## 컴포넌트 반복

동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map() 을 사용한다. 

```jsx
import { useState } from 'react';

function IterationSample(){
    const [names, setNames] = useState([
        { id: 1, text: '봄' },
        { id: 2, text: '여름' },
        { id: 3, text: '가을' },
        { id: 4, text: '겨울' },
    ]);
    const namesList = names.map(name => (
    	<li key={name.id}>
    		{name.text}
    	</li>
    ));
    return <ul>{namesList}</ul>
}
```

map에 key 값이 없다면 중간에 값이 바뀌었을 때 그 하위 값들이 전부 변하기때문에 비효율적인 렌더링이다. 고유한 key 값을 사용한다면 key를 이용해 중간의 값을 추가하거나 뺄 수 있다.

배열에 변화를 줄 때에는 불변성을 지켜주어야 한다. `push`, `splice`, `sort` 등의 함수를 사용하면 안된다. 만약 사용해야 한다면 기존의 배열을 한 번 복사하고 나서 사용해야한다. 

1. ... spread 연산자를 사용해서 복사해준 뒤 사용

   * ```jsx
     setUsers([...users, user]);
     ```

2. `concat`, `filter` 을 사용

   * ```jsx
     setUsers(users.concat(user));
     setUsers(users.filter(user => user.id !== id));
     ```

     

