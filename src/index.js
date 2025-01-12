import VueImageEditor from './components/VueImageEditor.vue'
import { VueFinalModal } from 'vue-final-modal'

export { VueImageEditor }

export default {
  install: (app) => {
    app.component('VueFinalModal', VueFinalModal)
    app.component('VueImageEditor', VueImageEditor)
  }
}

