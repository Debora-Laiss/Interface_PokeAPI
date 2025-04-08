import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FCE4EC',
          surface: '#FFFFFF',
          primary: '#D32F2F',
          secondary: '#F8BBD0',
          footer: '#F8BBD0',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#1E1E1E',
          primary: '#B71C1C',
          secondary: '#333333',
          footer: '#333333',
        },
      },
    },
  },
})

export default vuetify
