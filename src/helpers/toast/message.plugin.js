import M from 'materialize-css'

export default {
  install(Vue, options) {
    Vue.prototype.$message = function(text) {
      M.toast({ html: text, classes: 'green', displayLength: '1000' })
    }

    Vue.prototype.$error = function(html) {
      M.toast({
        html: `['Ошибка']: ${html}`,
        classes: 'red',
        displayLength: '1000'
      })
    }
  }
}
