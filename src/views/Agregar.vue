<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="agregarTarea($v.nombre.$model)">
      <input
        type="text"
        v-model="$v.nombre.$model"
        class="form-control mb-2"
        placeholder="Ingrese tarea"
      />
      <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">Agregar</button>
    </form>
    <small class="text-danger d-block" v-if="!$v.nombre.required">Campo Requerido</small>
    <small class="text-danger d-block" v-if="!$v.nombre.minLength">Mínimo 4 carácteres</small>
    {{$v}}
  </div>
</template>

<script>

import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
    name: "Agregar",
    data() {
        return {
        nombre: ""
        };
    },
    methods: {
        ...mapActions(["agregarTarea"])
    },
    validations: {
        nombre: {
        required,
        minLength: minLength(4)
        }
    }
}
</script>
