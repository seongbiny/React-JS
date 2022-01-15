# Hooks

## useState

함수 컴포넌트에서 상태를 관리할 때 사용

## useEffect

리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook

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

`useEffect` 에서는 함수를 반환 할 수 있는데 이를 `cleanup` 함수라고 부른다.

state에서 값 지울 때 실행된다.

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

useEffect 반환되는 함수는 cleanup 함수 ( 뒷정리 )

deps가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출

* deps에 빈배열 : 처음에만 함수 호출
* deps에 의존값 존재 : 처음과 지정값이 변경될 때 호출
* deps가 아예 없는 경우 : 컴포넌트가 리렌더링 될 때마다 호출

## useReducer



## useMemo

## useCallback

## useRef

## 커스텀 Hooks

