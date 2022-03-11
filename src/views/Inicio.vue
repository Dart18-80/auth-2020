<template>
  <div>
      <h1>Inicio</h1>
      <router-link class="d-grid gap-2 mb-2" to='/agregar'>
        <button class="btn btn-primary">Agregar Tarea</button>
      </router-link>

      <div v-if="carga" class="text-center mt-5">
        <h1>cargando contenido....</h1> 
        <pacman-loader :loading="carga" class="text-center"></pacman-loader>
      </div>

      <ul v-else class="list-group">
        <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
          {{item.id}} - {{item.nombre}}
          <button class="btn btn-danger me-2 float-end" @click="eliminarTarea(item.id)">Eliminar</button>
          <router-link :to="{name: 'Editar', params: {id: item.id}}">
            <button class="btn btn-warning me-2 float-end">Editar</button>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

export default {
    name:'Inicio',
    components:{
      PacmanLoader,
    },
    computed:{
      ...mapState(['usuario', 'tareas','carga'])
    },
    methods:{
      ...mapActions(['getTareas', 'eliminarTarea'])
    }, 
    created(){
      this.getTareas();
    }
}
</script>
