<!-- src/components/Mensagem.vue -->
<template>
  <div class="mensagem">
    <p>{{ texto }}</p>
    <button @click="remover">Remover</button>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  texto: String
})

const emit = defineEmits(['remover'])

function remover() {
  // Envia um "sinal" para o pai informando qual mensagem deve ser removida
  emit('remover', props.id)
}
</script>

<style scoped>
.mensagem {
  border: 1px solid var(--cor-primaria);
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
}

button {
  margin-top: 5px;
  padding: 4px 10px;
  border: none;
  background-color: var(--cor-primaria);
  color: white;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>