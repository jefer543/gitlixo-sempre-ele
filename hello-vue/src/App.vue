<!-- src/App.vue -->
<template>
  <div class="container">
    <h1 class="titulo">Mensagens da API</h1>

    <!-- Estado de carregamento -->
    <p v-if="carregando">Carregando mensagens...</p>

    <!-- Estado de erro -->
    <p v-else-if="erro">{{ erro }}</p>

    <!-- Estado vazio -->
    <p v-else-if="mensagens.length === 0">Nenhuma mensagem encontrada.</p>

    <!-- Lista de mensagens -->
    <MensagemCard v-else
      v-for="msg in mensagens"
      :key="msg.id"
    >
      <template #titulo>{{ msg.titulo }}</template>
      <template #conteudo>{{ msg.conteudo }}</template>
      <template #autor>{{ msg.autor }}</template>
      <template #data>{{ formatarData(msg.data_criacao) }}</template>
    </MensagemCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api.js'
import MensagemCard from '@/components/MensagemCard.vue'

const mensagens = ref([])
const carregando = ref(true)
const erro = ref(null)

// formata a data ISO para o formato local (pt-BR)
function formatarData(iso) {
  return new Date(iso).toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  })
}

// busca as mensagens da API ao montar o componente
onMounted(async () => {
  try {
    const resposta = await api.get('/mensagens')
    mensagens.value = resposta.data
  } catch (err) {
    erro.value = err.response?.data?.message || 'Erro ao carregar mensagens.'
  } finally {
    carregando.value = false
  }
})
</script>