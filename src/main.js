import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import vuetify from './plugins/vuetify'
import i18n from './lang/lang' 

createApp(App).use(router).use(i18n).use(vuetify).mount('#app')
