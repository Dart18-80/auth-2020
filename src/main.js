import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth} from './firebase'

auth.onAuthStateChanged(user =>{
    if(user){
        const detectoUsuario ={
            email: user.email,
            uid: user.uid,
        }
        store.dispatch('detectarUsuario', detectoUsuario)
    }else{
        store.dispatch('detectarUsuario', user)
    }
})

createApp(App).use(store).use(router).mount('#app')
