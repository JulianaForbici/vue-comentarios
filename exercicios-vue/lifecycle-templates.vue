<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContent = 'alo'
})
</script>
<template>
  <p ref="pElementRef">Hello</p>
</template>