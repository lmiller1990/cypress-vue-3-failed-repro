<template>
  <button @click="greet">Greet</button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'hello', msg: string): void
}>()

const greet = () => {
  emit('hello', 'Hello world')
}
</script>