# workspace

# template : React + Mobx(decorator) + Material UI

- react

  1. yarn create react-app [file]

- Material UI

  1. yarn add @material-ui/core

- Mobx , mobx-react

  1. yarn add mobx mobx-react

- Decorator

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
