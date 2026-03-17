<template>
  <h1>First App</h1>
  <hr />

  <MyCounter :value="5" />
</template>

<!--Tiene el setup porque como tal se hace el script setup-->
<script setup lang="ts">
import MyCounter from './components/MyCounter.vue'
</script>

<style scoped></style>
