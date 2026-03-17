<template>
  <h1>First App</h1>
  <hr />

  <MyCounter />
  <MyCounterScript />
  <MyCounterScript2 />
</template>

<!--Tiene el setup porque como tal se hace el script setup-->
<script setup lang="ts">
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue'
</script>

<style scoped></style>
