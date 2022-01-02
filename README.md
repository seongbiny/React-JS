## React.js

* 프로젝트 생성

```python
npx create-react-app my-app
```

* 프로젝트 실행

```python
npm start
```

http://localhost:3000 으로 실행



## React 란?

React는 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리

"컴포넌트"라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 도와준다.

```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
    document.getElementById('root')
);
```

## JSX 

```jsx
const element = <h1>Hello, world!</h1>;
```

## 엘리먼트 렌더링

> 엘리먼트는 React 앱의 가장 작은 단위이다.

엘리먼트는 컴포넌트의 "구성 요소"

## Components와 Props

> 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있다.

개념적으로 컴포넌트는 JavaScript 함수와 유사하다. "props"라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다.

### 함수 컴포넌트와 클래스 컴포넌트

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
```

이 함수는 데이터를 가진 하나의 "props" 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트이다. 이러한 컴포넌트는 JavaScript 함수이기 때문에 말 그대로 "함수 컴포넌트"라고 호칭한다.

```jsx
class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

React 관점에서 볼 때 두가지 유형의 컴포넌트는 동일하다.

class는 몇 가지 추가 기능이 있다.

**주의: 컴포넌트의 이름은 항상 대문자로 시작한다.**

