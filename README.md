### Installation

```sh
npm install
```

### Start Dev Server

```sh
npm start
```

### Build Prod Version

```sh
npm run build
```

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
