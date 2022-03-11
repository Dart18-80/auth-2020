import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'

const routes = [
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'Inicio',
    meta: {requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/acceso',
    name: 'Acceso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Acceso.vue')
  },
  {
    path: '/editar',
    name: 'Editar',
    meta: {requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    meta: {requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    auth.onAuthStateChanged(user =>{
      if(!user){
        next({path: '/acceso'})
      }else{
        next()
      }
    })
  }else{
    next()
  }
})

export default router
