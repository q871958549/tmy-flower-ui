import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-Plus'
import 'element-plus/dist/index.css'
import router from './routes'
import store from './vuex/store'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)


app.mount('#app')
