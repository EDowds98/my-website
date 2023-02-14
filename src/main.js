import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from './router'
import Blog from '../src/components/Blog.vue'
import "./index.css";

const routes = [
    {path: '/', component: App},
    { path: '/blog', component: Blog }
]

const app = createApp(App)

app.use(router)

app.mount('#app')
