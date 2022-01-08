## React.js

node.js lts 버전으로 다운로드

```powershell
node -v
npm -v
npm i -g create-react-app
```

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

**React는** 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 **JavaScript 라이브러리**

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

사용자 화면에 뷰를 보여 주는 것 = 렌더링

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



### 리액트를 배우는 이유?

**Web app** 을 만들기 위해

Vibe, Flipkart, Instagram 같은 사이트를 웹앱이라고 부른다.

다른 페이지로 넘어가거나 포스팅을 발행하거나 그런 행동을 해도 새로고침이 되지 않고 **스무스하게** 동작한다.



웹앱을 사용하는 이유

- UX가 뛰어나서 좋은 사용자경험을 제공하니까
- HTML 관리가 편해지고
- 구매전환율도 높아지고
- 리액트 문법으로 IOS/Android 모바일 앱제작도 가능하고
- 서버개발자가 편해져서



### App.js

```react
function App(){
    return(
      <div className="App">
      
        </div>
    )
}
```

리액트에서 JSX라는 문법을 쓴다. JS+HTML 일종의 자바스크립트기 때문에 자바스크립트에서 사용하는 예약어인 class라는 키워드를 막 사용하면 안됨



### JSX에서 데이터바인딩하기

데이터바인딩은? 자바스크립트 데이터를 HTML에 꽂아넣는 작업

```react
function App(){
    var data = '안녕하세요'; // 이 data를
    retrun (
        <div className="App">
      		<div className="black-nav">
            <div></div> // 여기에 꽂고 싶으면?
            </div>
        </div>
    )
}
```

```react
function App(){
    var data = '안녕하세요';
    retrun (
    	<div className="App">
        	<div className="black-nav">
                <div>개발 blog</div>
                <div>{ data }</div> 
            </div>
        </div>
    )
}
```



### HTML에 스타일을 직접 넣고 싶으면

JSX 상에서는 무조건 {} 오브젝트로 바꿔서 넣어야한다.

```jsx
<div style={ 스타일용 오브젝트 }> 글씨 </div>

<div style={ {color: 'blue', fontSize: '30px'} }> 글씨 </div>
```

- {속성명: '속성값'}
- 복잡해질 수 있다 => 변수로 따로 저장해놓고 style={변수명} 이렇게 넣거나 CSS파일에 class를 만들어 사용한다.



### state 만들어서 데이터 저장하기

리액트에선 변수 말고 state를 만들어서 데이터를 저장해 쓸 수 있다.

**변수가 변경될 때 자동으로 관련된 HTML을 재랜더링되게 만들고 싶으면** 변수 말고 state를 만들어 써야한다.

**리액트는 state가 수정이 일어나면 state가 포함된 HTML을 자동으로 재랜더링 해준다**

```react
import { useState } from 'react';

let [변수명, 변수명변경] = useState(저장할 데이터);
```

**state 데이터도 똑같이 변수처럼 데이터바인딩 가능**

**state에는 Array, Object 아무거나 다 넣을 수 있다.**

state를 변경하려면 state변경함수를 이용한다.

1. 수정하고 싶은 state의 deep/shallow 카피본을 하나 생성한다.
2. 카피본을 원하는대로 수정한다.
3. 카피본을 state변경함수() 에 넣는다.



### 어떤 HTML들을 Component 만드는게 좋을까?

- 사이트에 반복해서 출현하는 HTML 덩어리들
- 내용이 매우 자주 변경될 것 같은 HTML 부분을 잘라서
- 다른 페이지를 만들고 싶다면 그 페이지의 HTML 내용을 하나의 컴포넌트로
- 다른 팀원과 협업할 때 웹페이지를 컴포넌트 단위로 나눠서 작업을 분배

컴포넌트간에 state를 쓰고싶으면 props 문법을 이용해야하니까 너무 잘게 쪼개지 않기



```jsx
조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
```



array 안의 모든 자료에 똑같은 작업을 하나씩 시켜주고 싶을 때 쓰는 문법 map

```react
var array = [2,3,4];
var newArray = array.map(function(a){
    return a * 10
});
```

### JSX 안에서 map으로 반복문을 돌리고 싶으면

1. 원하는 자료에다가 map을 붙이면 그 자료 갯수만큼 반복문을 돌릴 수 있으며
2. 반복을 원하는 HTML을 return 안에 적으면 끝

#### 일반 for 반복문을 쓰고싶다면

1. 따로 일반 함수를 만들고
2. 함수안에 HTML을 담은 array 자료를 하나 생성한다.
3. 함수안에서 for 반복문을 이용해 array내에 HTML을 추가해준다.
4. 완성된 array를 return 해준다.
5. 함수를 원하는 곳에 { 함수명() } 데이터바인딩 해준다.

함수 만들기 귀찮으니 그냥 map을 사용하자



