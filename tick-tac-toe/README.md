# README

세 가지 React 컴포넌트

* Square
  * `<button>`을 렌더링
* Board
  * 사각형 9개를 렌더링
* Game
  * 게임판을 렌더링. 나중에 수정할 자리 표시자 값을 가지고 있다.

## Square 컴포넌트와 Board 컴포넌트

Board가 부모이다. 

부모 Board 컴포넌트에서 자식 Square 컴포넌트로 props를 전달한다.



## Props를 통해 데이터 전달하기

### Board에서 Square 컴포넌트 props 전달

board에서 square컴포넌트로 데이터를 전달해야 한다.

square에 value prop을 전달하기 위해 board의 renderSquare 함수 코드를 수정

그 다음 값을 표시하기 위해 square의 render함수에 `{this.props.value}` 추가

여기까지 하면 화면에 숫자가 렌더링 된다.

![image-20220102193148779](md-images/image-20220102193148779.png)

### onClick 속성 넣기

사용자와 상호작용 할 수 있도록 square 컴포넌트를 클릭하면 'X'가 나와야함

```react
class Square extends Component {
    render() {
        return (
        <button
            className='square'
            onClick={() => {
                    alert('yes');
            }}>
            {this.props.value}
        </button>
      );
   }
}
```

### state 설정하기

square 컴포넌트를 클릭한 것을 '기억하게' 만들어 'X'가 표시되도록 해야 한다.

React 컴포넌트는 생성자에 this.state를 설정하는 것으로 state를 가질 수 있다.

현재 값을 this.state에 저장하고 square를 클릭하는 경우 변경되도록 한다.

1. 클래스에 생성자를 추가하여 state를 초기화한다.

```react
class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null;
        };
    }
}
```

2. render함수도 변경한다.

```react
class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null;
        };
    }
    
    render() {
        return (
        <button
            className='square'
            onClick={() => {
                this.setState({ value: 'X' });
            }}>
            {this.state.value}
        </button>
        );
    }
}
```

지금까지

* 버튼 태그 안의 this.props.value => this.state.value
* onClick 이벤트 핸들러를 onClick={() => {this.setState({value: 'X'})}} 로 변경
  * 이처럼 Square의 render 함수 내부에서 onClick핸들러를 통해 this.setState를 설정하는 것 만으로도 버튼을 클릭할 때 해당 컴포넌트가 렌더링되도록 할 수 있다.

## 부모의 자식 컴포넌트 설정하기

현재 모든 square 컴포넌트에서 각각 state를 갖고 있는데, 승자를 확인하기 위해선 9개의 square 값을 한 곳에서 확인할 수 있어야 한다.

어떻게? state를 각각의 square가 아니라 부모인 board에 저장한다. 그리고 부모인 board는 자식은 square에게 prop으로 상태를 전달 한다.

