# react axios

```bash
yarn add axios
```

1. 서버에 요청을 보내고(request)

2. 서버로부터 응답이 오면(response) 제대로 응답이 왔을 때와 못 왔을 때를 구분하여 처리

### axios의 request 메소드

1. GET: 서버에서 어떤 데이터를 가져와서 보여줌

2. POST: 서버로 데이터를 보냄

3. PUT: 데이터베이스 내부 내용 갱신

4. DELETE: 데이터베이스 내부 내용 삭제

```js
axios({
    // request
    method: "get",
    url: "url",
    responseType: "type"
}).then(function (response){
    // response Action
});
```

## GET

```
axios.get(url[,config])
```

**1. 지정된 단순 데이터 요청을 수행하는 경우 -> url만 파라미터로 넘김**

```js
async function getData() {
    try {
    //응답 성공
    const response = await axios.get('url주소');
    console.log(response);
    } catch (error) {
    console.error(error);
    }
}
```

**2. 사용자 번호에 따라 다른 데이터를 불러오는 경우 -> url과 함께 prams:{} 객체도 파라미터로 넘김**

```js
async function getData() {
    try {
    const response = await axios.get('url주소',{
      params:{
        //url 뒤에 붙는 param id 값
        id: 1234
        }
       });
    console.log(response);
    } catch (error) {
      console.error(error);
  }
}
```

## POST

```
axios.post(url, data[,config])
```

서버에 데이터를 보내는 POST 메소드에서는 보내고자 하는 데이터를 message body에 포함시켜 보낸다.

```js
async function postData() {
    try {
    const response = await axios.post('url주소', {
        //보내고자 하는 데이터
        username: "devstone",
        password: "12345"
    }),
    console.log(response);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
}
```

