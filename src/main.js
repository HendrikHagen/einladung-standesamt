import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import de from './i18n/de.json'
import es from './i18n/es.json'
import './style.css'

const browserLang = navigator.language.startsWith('es') ? 'es' : 'de'

const i18n = createI18n({
  legacy: false,
  locale: browserLang,
  fallbackLocale: 'de',
  messages: { de, es },
})

createApp(App).use(i18n).mount('#app')
