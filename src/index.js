import VueImageEditor from './components/VueImageEditor.vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

export { VueImageEditor }

export default {
  install: (app) => {
    const vfm = createVfm()
    app.use(vfm)
    app.component('VueImageEditor', VueImageEditor)
  }
}

