# Hooks

> Hook은 class를 작성하지 않고도 state와 다른 React의 기능들을 사용할 수 있게 해준다.

## useState

`useState`는 인자로 초기 state 값을 하나 받는다. 이 초기값은 첫 번째 렌더링에만 딱 한번 사용된다.

#### 여러 state 변수 선언하기

하나의 컴포넌트 내에서 State Hook을 여러 개 사용할 수도 있다.

```jsx
import React, { useState } from 'react';

function ExampleWithManyStates() {
    // 상태 변수를 여러 개 선언했습니다!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
}
```

**언제 Hook을 사용할까?** 함수 컴포넌트 안에서 Hook을 이용하여 state를 사용할 수 있다.

배열 구조 분해 문법은 `useState`로 호출된 state 변수들을 다른 변수명으로 할당할 수 있게 해준다. React는 매번 렌더링할 때 `useState`가 사용된 순서대로 실행할 것이다.

**useState를 호출하는 것은 무엇을 하는 걸까?** "state 변수"를 선언할 수 있다. 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않는다.

**useState의 인자로 무엇을 넘겨주어야 할까?** `useState()` Hook의 인자로 넘겨주는 값은 state의 초기 값이다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있다. (2개의 다른 변수를 저장하기를 원한다면 `useState()`를 두 번 호출해야 한다.)

**useState는 무엇을 반환할까?** state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환한다. 이것이 바로 `const [count, setCount] = useState()`라고 쓰는 이유이다. 

#### state 가져오기

```jsx
<p>You clicked {count} times</p>
```

#### state 갱신하기

```jsx
<button onClick={() => setCount(count + 1)}>Click me</button>
```

#### 근데 Hook이 뭔가요?

Hook은 함수 컴포넌트에서 React state와 생명주기 기능을 "연동"할 수 있게 해주는 함수이다.  Hook은 class 안에서는 동작하지 않는다. 대신 class 없이 React를 사용할 수 있게 해주는 것이다.

React는 `useState` 같은 내장 Hook을 몇 가지 제공한다. 컴포넌트 간에 상태 관련 로직을 재 사용하기 위해 Hook을 직접 만드는 것도 가능하다.

## useEffect

Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있다.

리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook

데이터 가져오기, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 side effects이다. 이런 기능들을 side effect라 부른다.

React 컴포넌트에는 일반적으로 두 종류의 side effect가 있다. 정리(clean-up)가 필요한 것과 그렇지 않은 것. 

### 정리(Clean-up)를 이용하지 않는 Effects

**React가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우가 있다.** 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리가 필요 없는 경우들이다. 이러한 예들은 실행 이후 신경 쓸 것이 없기 때문이다. 

**useEffect가 하는 일은 무엇일까?** useEffect Hook을 이용하여 우리는 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말한다. React는 우리가 넘긴 함수를 기억했다가(이 함수를 'effect'라고 부른다.) DOM 업데이트를 수행한 이후에 불러낼 것이다. 

**useEffect를 컴포넌트 안에서 불러내는 이유는 무엇일까?** `useEffect`를 컴포넌트 내부에 둠으로써 effect를 통해 `count` state 변수(또는 그 어떤 prop에도)에 접근할 수 있게 된다. 함수 범위 안에 존재하기 때문에 특별한 API 없이도 값을 얻을 수 있는 것이다. Hook은 자바스크립트의 클로저를 이용하여 React에 한정된 API를 고안하는 것보다 자바스크립트가 이미 가지고 있는 방법을 이용하여 문제를 해결한다.

**useEffect는 렌더링 이후에 매번 수행되는 걸까?** Yes, 기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행된다. 마운팅과 업데이트라는 방식으로 생각하는 대신 effect를 렌더링 이후에 발생하는 것으로 생각하는 것이 더 쉽다. React는 effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장한다.

### 정리(Clean-up)를 이용하는 Effects

외부 데이터에 **구독(subscription)을 설정해야 하는 경우**를 생각해보자. 이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요하다. state에서 값을 지울 때 실행된다.

```jsx
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // effect 이후에 어떻게 정리(clean-up)할 것인지 표시합니다.
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  },[props.friend.id]); // props.friend.id가 바뀔 때만 재구독합니다.

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

**effect에서 함수를 반환하는 이유는 무엇일까?** 이는 effect를 위한 추가적인 정리(clean-up) 메커니즘이다. 모든 effect는 정리를 위한 함수를 반환할 수 있다. 이 점이 구독(subscription)의 추가와 제거를 위한 로직을 가까이 묶어둘 수 있게 한다. 구독(subscription)의 추가와 제거가 모두 하나의 effect를 구성하는 것이다.

**React가 effect를 정리(clean-up)하는 시점은 정확히 언제일까?** React는 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행한다. 위의 예시에서 보았듯이 effect는 한번이 아니라 렌더링이 실행되는 때마다 실행된다.

useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.

마운트 : 처음 나타남

언마운트 : 사라짐

useEffect는 함수이고, 첫번째 인자는 함수, 두번째 인자는 배열(주로 deps라고 칭함)이 들어간다.

```jsx
import React, { useEffect } from 'react';

function User({ user }) {
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);
}
```

주로 마운트 시에 하는 작업들 

* `props` 로 받은 값을 컴포넌트의 로컬 상태로 설정
* 외부 API 요청 (REST API 등)
* 라이브러리 사용 (D3, Video.js 등)
* setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

언마운트 시에 하는 작업들

* setInterval, setTimeout 을 사용하여 등록한 작업을 clear 하기 (clearInterval, clearTimeout)
* 라이브러리 인스턴스 제거

useEffect를 사용하여 마운트/언마운트/업데이트 시 할 작업 설정

```jsx
useEffect(() => {//마운트
    return ()=> {
        //언마운트
    }
},deps)
```

deps가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출

* deps에 빈배열 : 처음에만 함수 호출
* deps에 의존값 존재 : 처음과 지정값이 변경될 때 호출
* deps가 아예 없는 경우 : 컴포넌트가 리렌더링 될 때마다 호출

## Hook 사용 규칙

* **최상위(at the top level)** 에서만 Hook을 호출해야 한다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요
* **React 함수 컴포넌트** 내에서만 Hook을 호출해야 한다.

## useReducer

복잡한 컴포넌트들의 state를 reducer로 관리할 수 있게 해준다.

* 현재 컴포넌트가 아닌 다른 곳에 state를 저장하고 싶을 때 사용
* reducer 라는 함수를 만들고 state와 action 이라는 인자를 받는다.
* action 에는 객체가 전달되는데 그 안에 type 이라는 프로퍼티를 주로 설정해서 사용한다.
* type 프로퍼티를 통해 switch 문으로 분기한다.
* state는 useReducer를 통해 저장된 변수이다.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

* reducer는 함수
* initialState는 객체

## useMemo

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

useMemo(callback, [변경되는 값]);
```

* memoization 된 값을 반환
* 의존성이 변경되는 경우, 이전에 기억하고 있던 리턴 값과 비교해서 다른 경우에만 리렌더링
* useMemo에서 전달된 함수는 렌더링 중에 실행되므로, 렌더링 중에서 실행하지 않는 함수는 useEffect를 사용할 것
* useRef는 DOM element의 특정 속성 값을 기억한다면, useMemo는 특정 함수의 리턴 값을 기억한다.
* 성능 최적화할 때 사용한다.
* 첫 번째 인수에는 함수, 두 번째 인수에는 배열을 넣어준다.
  * **두번째 배열이 바뀌기 전까지 값을 기억**

## useCallback

```jsx
const memoizedCallback = useCallback(
    () => {
        doSomething(a, b);
    },
    [a, b],
);
```

* memoization 된 콜백(함수) 자체를 반환
* `useCallback(fn, deps)` 은 `useMemo(() => fn, deps)` 와 동일
* 의존성이 변경되는 경우, 이전에 기억하고 있던 함수 자체와 비교해서 다른 경우에만 리렌더링

## useRef

## 커스텀 Hooks

개발을 하다 보면 가끔 상태 관련 로직을 컴포넌트 간에 재사용하고 싶은 경우가 생긴다.

use라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성

그 안에서 useState, useEffect, useReducer, useCallback 등 Hooks를 사용하여 원하는 기능을 구현해주고 컴포넌트에서 사용하고 싶은 값들을 반환

각 컴포넌트의 state는 완전히 독립적이다. Hook은 state 그 자체가 아니라, 상태 관련 로직을 재사용하는 방법이다. 실제로 각각의 Hook 호출은 완전히 독립된 state를 가진다. 그래서 심지어는 한 컴포넌트 안에서 같은 custom Hook을 두 번 쓸 수도 있다.

Custom Hook은 기능이라기보다는 컨벤션에 가깝다. 이름이 `"use"`로 시작하고, 안에서 다른 Hook을 호출한다면 그 함수를 custom Hook이라고 부를 수 있다.
