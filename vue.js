<template>
  <h1>{{ mensagem }}</h1>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const mensagem = ref("Olá, Mundo!")
    return { mensagem }
  }
}
</script>

<template>
  <div>
    <p>{{ contador }}</p>
    <button @click="contador++">Incrementar</button>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const contador = ref(0)
    return { contador }
  }
}
</script>