# workspace

# template : React + Mobx(decorator) + Material UI

- react

  1. yarn create react-app [file]

- Material UI

  1. yarn add @material-ui/core

  2. yarn add history @material-ui/core@next

  3. yarn add @emotion/react

  4. yarn add @emotion/styled

  5. yarn add react-feather

- Mobx , mobx-react

  1. yarn add mobx mobx-react

- Decorator
  데코레이터 사용 시 빨간줄 없애기 : Setting - experimental Decorators 체크

  1. yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators

  2. yarn eject : 에러발생시 커밋실행

  3. package.json babel 코드 수정

```
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }
```

- Router

  1. yarn add react-router-dom

  2. yarn add history react-router-dom@next
