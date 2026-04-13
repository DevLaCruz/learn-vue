<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl">Espere</h1>
    <h3 class="animate-pulse">Cargando...</h3>
  </section>

  <section v-if="randomPokemon" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">¿Quién es este Pokémon?</h1>

    <h3>{{ randomPokemon }}</h3>

    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus === GameStatus.Playing"
    />
    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { UsePokemonGame } from '../composables/usePokemonGame'
import { GameStatus } from '../interfaces'
const { gameStatus, randomPokemon, isLoading } = UsePokemonGame()
</script>

<style scoped></style>
