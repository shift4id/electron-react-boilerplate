# Sid's Electron React Boilerplate :smile:

[![License][github-license-image]][github-license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![DevDependency Status][dev-dependency-image]][dev-dependency-url]

A highly opinionated boilerplate that is extremely customizable for starting projects with Electron and React!

This boilerplate was made for beginners who don't want to worry about set up, and for my fellow obsessive compulsives that love to have full control of their project!

## About
This boilerplate uses:
[Webpack 5](https://webpack.js.org/),
[Babel 7](https://babeljs.io/),
[ESLint](https://eslint.org/) ([Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide),
[Prettier](https://prettier.io/),
[Stylelint](https://stylelint.io/),
[SCSS](https://sass-lang.com/),
[PostCSS](https://postcss.org/),
[Electron](https://www.electronjs.org/),
[React](https://reactjs.org/),
and [Redux](https://redux.js.org/) (with [Redux Toolkit](https://redux-toolkit.js.org/).

To top it all off, I added hot reloading with [React Fast Refresh](https://www.npmjs.com/package/react-refresh)!

## Install

Clone the repo using git and install dependencies:
```bash
git clone https://github.com/shift4id/electron-react-boilerplate.git your-project-name
cd your-project-name
yarn
```

## Scripts

### Developing
Start the app in development mode:
```bash
yarn dev
```

### Linting
Lint JS and JSX:
```bash
yarn lint:js
yarn lint:js:fix
```

Lint CSS:
```bash
yarn lint:css
yarn lint:css:fix
```

Lint Both:
```bash
yarn lint
yarn lint:fix
```

### Building
Build the application for production:
```bash
yarn build
```

Build the application for development:
```bash
yarn webpack
```

### Starting
Test a built application before packaging:
```bash
yarn start
```

### Packaging
Package app for local platform:
```bash
yarn package
```

Package apps for all platforms:
```bash
yarn package:all
```

Package apps for Linux:
```bash
yarn package:lin
```

Package apps for macOS:
```bash
yarn package:mac
```

Package apps for Windows:
```bash
yarn package:win
```

## License

MIT © [Siddharth Adusumelli](https://github.com/shift4id)

[github-license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[github-license-url]: https://github.com/shift4id/electron-react-boilerplate/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/shift4id/electron-react-boilerplate.svg
[dependency-url]: https://david-dm.org/shift4id/electron-react-boilerplate
[dev-dependency-image]: https://img.shields.io/david/dev/shift4id/electron-react-boilerplate.svg?label=devDependencies
[dev-dependency-url]: https://david-dm.org/shift4id/electron-react-boilerplate?type=dev
