<template>
  <section v-if="false" class="flex flex-col justify-center items-center">
    <h1 class="text-3xl">Espere</h1>
    <h3 class="animate-pulse">Cargando...</h3>
  </section>

  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">¿Quien es este Pokémon?</h1>
    <PokemonPicture />
    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { UsePokemonGame } from '../composables/usePokemonGame'

const { gameStatus, isLoading } = UsePokemonGame()
</script>

<style scoped></style>
