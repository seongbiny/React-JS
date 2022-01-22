# react websocket stomp

STOMP는 HTTP에서 모델링되는 Frame 기반 프로토콜이다.

다 동일한 websocket으로 연결이 되고 거기서 구독으로 방을 나누는 방식

### 라이브러리 추가

```bash
yarn add webstomp-client
import Stomp from 'webstomp-client';
```

### 프록시 설정

CRA 사용하는 경우 package.json 에서 "proxy": "http://localhost:8080" 설정

STOMP에 있어 많은 어플리케이션들은 jmesnil/stomp-websocket( stomp.js 로 알려진 )라이브러리를 사용해왔지만, 더이상 유지되지 않는다. 최근에는 JSteunou/webstomp-client를 많이 사용한다.

```js
var websocket = new WebSocket("/ws/chat");
var stomp = webstomp.over(websocket);

stomp.connect({}, function(frame) {
}
```

### 서버 연결

```js
client.connect({}, function(){

})
```

서버와 연결하면 서버로부터 연결이 되었다는 CONNECT 응답 프레임이 온다.

{} 은 CONNECT 프레임을 전송할 때 같이 전송하는 헤더를 설정하는 곳이다.

연결이 완료되면 콜백 함수가 실행된다. 이 콜백함수를 통해 서버 연결후에 취할 다양한 액션을 넣어 줄 수 있다.

### 구독

상대방에게 메세지를 보내거나 받아야 할 경우 특정 URL에 대해 구독해야 한다.

예를 들면 우리가 누군가에게 우편을 보낼 때 받는 사람의 주소가 필요 하듯이 stomp JS 에서도 메세지를 보내거나 받기 위해 특정 URI를 알고 있어야 하며 그것을 구독해야 한다. 특정 URI를 구독한다면 이제 상대방이 해당 URL을 구독하고 메세지를 보내면 나는 해당 메세지를 받을 수 있게 된다.

특정 채팅방에 입장하면 해당 채팅방으로부터 전송되는 메세지를 수신할 수 있도록 SUBSCRIBE 프레임을 날리는 경우가 있다. 이 구독을 하기 위해서는 SUBSCRIBE 프레임을 보낸다.

```js
client.subscribe(`/room/1`, function (frame) {

}, {})
// subscribe(path, callback)으로 메세지를 받을 수 있음
// path = endpoint
```

첫번째 인자는 구독할 URI를 의미한다. 두번째 인자는 구독한 후에 실행될 콜백함수이며 구독 이후 상대방으로부터 메세지를 수신 받을 때마다 해당 콜백함수가 실행된다.

해당 콜백함수의 매개변수를 통해 프레임의 정보를 console.log를 통해 조회할 수 있다.

세번째 인자는 SUBSCRIBE 프레임을 전송할 때 같이 보내는 헤더를 설정하는 곳이다.

### 구독 끊기

만약 특정 채팅방에서 나가거나 해당 어플리케이션에서 나갔을 경우 상대방이 보낸 메세지를 읽지 않음으로 표시하기 위해 구독을 끊어준다. 이 구독을 끊는다는 것은 서버와의 연결을 끊는 것이 아닌 특정 메세지의 SEND 프레임을 수신하지 않겠다는 것을 의미한다.

```js
client.subscribe(`/room/1`, function (frame) {

}, {}).unsubscibe()
```

1번 방을 나갈 때 구독을 끊는다는 의미

### 메세지 전송

SEND 프레임 전송

```js
const message = {
    key: value
}
client.send("/message", {}, JSON.stringify(message))
// send(path, header, message)로 메세지를 보낼 수 있음
```

send() 의 첫번째 인자는 해당 프레임을 전송할 때 필요한 URI 를 입력한다. 두번째 인자는 해당 프레임을 전송할 때 헤더를 설정하는 곳이다. 세번째 인자는 해당 프레임을 전송할 때 보낼 데이터를 설정하는 body이며 이 부분에 상대방에게 보내고 싶은 메세지가 들어간다. 보낼 데이터를 JSON형태로 보내는 것으로 설정한 코드

해당 key와 value는 서버 개발자가 지정한 양식에 따라 입력해야 할 데이터를 넣어준다.

### 서버 연결 끊기

```js
client.disconnect();
```

### 프레임을 개발자 도구에서 숨기기

채팅을 하다보면 프레임이 개발자 도구에 노출됨으로써 프레임에 포함되는 헤더, 데이터, body도 같이 노출된다. 이러한 프레임을 개발자 도구에서 숨기기 위해서는 다음과 같이 코드를 추가해준다.

```js
client.debug = null
```

### Heartbeats

프록시가 연결이 끊겼다는 결론을 내리는 것을 방지하기 위해 서버가 heartbeat 메세지를 보내도록 요구한다. 서버가 주기적으로 heartbeat message를 전송하여 프록시가 커넥션이 끊겼다고 판단하지 않도록 한다.
