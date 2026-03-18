<script setup>
import { reactive, ref } from 'vue'

const counter=reactive({ count : 0})
const message = ref('hello world')
</script>

<template>
  <h1>
    <p>Contador: {{ counter.count }}</p>
    <p>Mensagem: {{ message }}</p>
  </h1>
</template>