import { ref, computed } from 'vue'

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue)

  return {
    counter,

    //Read only
    squareCounter: computed(() => counter.value * counter.value),
  }
}
