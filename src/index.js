import hljs from 'highlight.js'

export default {
  name: 'highlight',
  functional: true,
  props: {
    code: {
      type: String
    },
    language: {
      type: String
    }
  },
  render(h, ctx) {
    const { language } = ctx.props
    const code = ctx.props.code || ctx.children[0].text
    const { value:html } = language ? hljs.highlight(language, code) : hljs.highlightAuto(code)

    return h('pre', ctx.data, [
      h('code', {
        class: 'hljs',
        domProps: {
          innerHTML: html
        }
      })
    ])
  }
}
