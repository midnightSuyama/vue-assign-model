import dotProp from 'es5-dot-prop'

const VueAssignModel = {
  data: function(){
    let root = (typeof this.$options.el === 'string') ? document.querySelector(this.$options.el) : this.$options.el
    if (!root) return {}

    let data = (() => {
      let data = {}
      if (root.hasAttribute('data-vue-model')) {
        data = Object.assign(data, JSON.parse(root.dataset.vueModel))
      }
      let elements = root.querySelectorAll('[data-vue-model]')
      for (let e of elements) {
        data = Object.assign(data, JSON.parse(e.dataset.vueModel))
      }
      return data
    })()

    const modelAttributes = ['v-model', 'v-model.lazy', 'v-model.number', 'v-model.trim']

    let getModel = e => {
      for (let attr of modelAttributes) {
        let model = e.getAttribute(attr)
        // Disable: prefix _ and method
        if (model !== null && /^(?!_|.+\(.?\)$).+/.test(model)) return model
      }
      return null
    }

    let multipleCheckboxes = null
    let isMultipleCheckboxes = model => {
      if (!multipleCheckboxes) {
        let elements = root.querySelectorAll('input[type=checkbox]')
        let models = []
        for (let e of elements) {
          let model = getModel(e)
          if (model) models.push(model)
        }
        multipleCheckboxes = models.filter((v, i, self) => (self.indexOf(v) === i && self.lastIndexOf(v) !== i))
      }
      return multipleCheckboxes.includes(model)
    }

    let elements = root.querySelectorAll(modelAttributes.map(attr => `[${attr}]`.replace('.', '\\.')).join(','))
    for (let e of elements) {
      let model = getModel(e)
      if (!model) continue

      let tag  = e.tagName.toLowerCase()
      let type = (() => {
        let type = e.getAttribute('type')
        return (typeof type === 'string') ? type.toLowerCase() : type
      })()

      if (tag === 'select') {
        if (e.multiple) {
          dotProp.set(data, model, [...e.selectedOptions].map(option => option.value))
        } else {
          dotProp.set(data, model, e.value)
        }
      } else if (tag === 'input' && type === 'checkbox') {
        if (isMultipleCheckboxes(model)) {
          if (e.checked) {
            dotProp.set(data, model, [...dotProp.get(data, model, []), e.value])
          } else if (!dotProp.has(data, model)) {
            dotProp.set(data, model, [])
          }
        } else {
          dotProp.set(data, model, e.checked)
        }
      } else if (tag === 'input' && type === 'radio') {
        if (e.checked) {
          dotProp.set(data, model, e.value)
        } else if (!dotProp.has(data, model)) {
          dotProp.set(data, model, null)
        }
      } else if (tag === 'input' || tag === 'textarea') {
        dotProp.set(data, model, e.value)
      }
    }

    return data
  }
}

export default {
  install: (Vue, options) => {
    Vue.mixin(VueAssignModel)
  }
}
