# vue-highlight-component

[![NPM version](https://img.shields.io/npm/v/vue-highlight-component.svg?style=flat)](https://npmjs.com/package/vue-highlight-component) [![NPM downloads](https://img.shields.io/npm/dm/vue-highlight-component.svg?style=flat)](https://npmjs.com/package/vue-highlight-component) [![CircleCI](https://circleci.com/gh/egoist/vue-highlight-component/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-highlight-component/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add highlight.js vue-highlight-component
```

## Usage

```vue
<template>
  <highlight language="swift">{{ code }}</highlight>
</template>

<script>
import hljs from 'highlight.js'
import Highlight from 'vue-Highlight-component'

// Register the language if it's not supported by default
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'))

export default {
  data() {
    return {
      code: `your swift code...`
    }
  },
  components: {
    Highlight
  }
}
</script>
```

You can also use a prop `code` to set the code you wanna highlight:

```vue
<template>
  <highlight :code="code"></highlight>
</template>
```

Prop `language` is optional since highlight.js could automatically infer the language if it's not set.

## Related

- [vue-prism-component](https://github.com/egoist/vue-prism-component): highlight code using prism.js and vue component

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-highlight-component** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-highlight-component/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
