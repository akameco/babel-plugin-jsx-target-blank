# babel-plugin-jsx-target-blank

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/babel-plugin-jsx-target-blank.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/akameco/babel-plugin-jsx-target-blank.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-jsx-target-blank)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> for external link

## Install

npm:

```
$ npm install --save-dev babel-plugin-jsx-target-blank
```

yarn:

```
$ yarn add --dev babel-plugin-jsx-target-blank
```

## Usage

.babelrc

```js
{
  "plugins": ["jsx-target-blank"]
}
```

## Examples

```js
<a href="akameco.github.io" target="_blank">akameco</a>

      ↓ ↓ ↓ ↓ ↓ ↓

<a href="akameco.github.io" target="_blank" rel="noopener noreferrer">akameco</a>
```

### with other tags

```js
<a href="akameco.github.io" target="_blank" rel="noopener prefetch">
  akameco
</a>

      ↓ ↓ ↓ ↓ ↓ ↓

<a href="akameco.github.io" target="_blank" rel="noopener prefetch noreferrer">
  akameco
</a>
```

### with external link

```js
<a href={externalLink} target="_blank">akameco</a>

      ↓ ↓ ↓ ↓ ↓ ↓

<a href={externalLink} target="_blank" rel="noopener noreferrer">akameco</a>
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/babel-plugin-jsx-target-blank/commits?author=akameco "Code") [📖](https://github.com/akameco/babel-plugin-jsx-target-blank/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/babel-plugin-jsx-target-blank/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
