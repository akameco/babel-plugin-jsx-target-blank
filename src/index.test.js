// @flow
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  title: 'default',
  plugin,
  snapshot: true,
  tests: [
    {
      title: 'default',
      code: `
        <a href="akameco.github.io" target="_blank">akameco</a>
    `,
    },
    {
      title: 'href = variable',
      code: `
      <a href={externalLink} target="_blank">akameco</a>
    `,
    },
    {
      title: 'has secure rel',
      code: `
      <a href="akameco.github.io" target="_blank" rel="noopener noreferrer">
        akameco
      </a>
    `,
    },
    {
      title: 'has noopener only',
      code: `
      <a href="akameco.github.io" target="_blank" rel="noopener">
        akameco
      </a>
    `,
    },
    {
      title: 'with other rel',
      code: `
      <a href="akameco.github.io" target="_blank" rel="noopener prefetch">
        akameco
      </a>
    `,
    },
    {
      title: 'has no rel',
      code: `
      <a href="akameco.github.io" target="_blank" rel="">
        akameco
      </a>
    `,
    },
    {
      title: 'rel = variable',
      code: `
      <a href="akameco.github.io" target="_blank" rel={val}>
        akameco
      </a>
    `,
    },
    {
      title: 'no-a-tag',
      code: `<div id="hoge">hello</div>`,
    },
  ],
})
