# localstorage

```
localStorage.setItem('데이터이름', '데이터');
localStorage.getItem('데이터이름');
localStorage.removeItem('데이터이름');
```

**localStorage에 object / array 형태를 바로 저장할 수 없다. **=> json 으로 바꿔줘야 함

```
localStorage.setItem('obj', JSON.stringify({name: 'kim'}));

var a = localStorage.getItem('obj');
var b = JSON.parse(a)
```

