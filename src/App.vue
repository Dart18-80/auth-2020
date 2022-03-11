<template>
  <div class="container mt-2" id="app">
    <div class="text-center">
      <router-link v-if="existeUsuario" to="/" class="btn btn-dark ms-2">Inicio</router-link> 
      <router-link v-if="!existeUsuario" to="/registro" class="btn btn-dark ms-2">Registrar</router-link>
      <router-link v-if="!existeUsuario" to="/acceso" class="btn btn-dark ms-2">Acceso</router-link>  
      <button v-if="existeUsuario" @click="cerrarSesion" class="btn btn-dark ms-2">Cerrar Sesion</button>
    </div>
    <router-view/>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default{
  name: 'App',
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>
