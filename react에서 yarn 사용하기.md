## react에서 yarn 사용하기

yarn 1.22 install

yarn add ~

yarn start

## react에서 bootstrap 사용하기

```
yarn add react-bootstrap bootstrap
```

index.html 파일 <head> 태그 안에 CSS link 태그 복붙

## axios

```
yarn add axios
```

import axios from 'axios';

```react
axios.get('url')
.then(()=>{ 요청성공 시 실행할 코드 })
.catch(()=>{ 요청실패 시 실행할 코드 })
```

``` react
axios.post('url', { id : 'test', pw : 1234})
  .then((result)=>{  })
  .catch(()=>{ })
```

## styled-components

```
yarn add styled-components
```

import styled from 'styled-components'



yarn add react-transition-group

import { CSSTransition } from 'react-transition-group';



## .prettierrc

```js
{
  "trailingComma": "all",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true
}
```

