import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import {createRouter, createWebHistory} from 'vue-router'
import RegisterScreen from './components/RegisterScreen.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: RegisterScreen },
    ],

})

createApp(App).use(router).mount('#app')