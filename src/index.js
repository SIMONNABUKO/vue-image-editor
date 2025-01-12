import VueImageEditor from './components/VueImageEditor.vue'

export { VueImageEditor }

export default {
  install: (app) => {
    app.component('VueImageEditor', VueImageEditor)
  }
}

