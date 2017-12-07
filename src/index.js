// @flow weak
import jsxSyntax from 'babel-plugin-syntax-jsx'
// import blog from 'babel-log'

export default ({ types: t }) => {
  function isTargetBlank({ name, value }) {
    return (
      name.name === 'target' &&
      t.isStringLiteral(value) &&
      value.value.toLowerCase() === '_blank'
    )
  }

  return {
    name: 'jsx-target-blank',
    inherits: jsxSyntax,
    visitor: {
      JSXAttribute(path) {
        if (path.parent.name.name !== 'a' || !isTargetBlank(path.node)) {
          return
        }

        let relNode = path.parent.attributes.find(
          attr => attr.name.name === 'rel',
        )

        if (!relNode) {
          relNode = t.jSXAttribute(
            t.jSXIdentifier('rel'),
            t.stringLiteral('noopener noreferrer'),
          )

          path.parent.attributes.push(relNode)
        }

        if (!t.isStringLiteral(relNode.value)) {
          return
        }

        const rels = new Set(relNode.value.value.toLowerCase().split(' '))
        rels.add('noopener')
        rels.add('noreferrer')
        relNode.value.value = Array.from(rels).join(' ')
      },
    },
  }
}
