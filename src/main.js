import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

import ru from './locales/ru.json'
import en from './locales/en.json'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru,
    en
  }
})

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'dark' }
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)
app.use(vuetify)

app.mount('#app')