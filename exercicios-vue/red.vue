<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
    <h1 :class="titleClass">Red</h1>
</template>

<style>
.title {
    color: red;
}
</style>