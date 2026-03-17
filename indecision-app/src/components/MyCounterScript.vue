<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h4>{{ text }}</h4>

    <div class="">
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, toValue } from 'vue'

interface Props {
  value: number
  text: string
}

const props = defineProps<Props>()

const counter = ref(props.value)
const squareCounter = computed(() => counter.value * counter.value)

// const addQuantity = () => {
//   counter.value++
// }

// const decQuantity = () => {
//   counter.value--
// }

console.log('Hello Apps')
</script>
