import { computed, onMounted, ref } from 'vue'
import { GameStatus } from '../interfaces/game-status.enum'
import { pokemonApi } from '../api/pokemonApi'
import type { Pokemon, PokemonListResponse } from '../interfaces'

export const UsePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonOptions = ref<Pokemon[]>([])

  const isLoading = computed(() => pokemons.value.length === 0)
  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151')
    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/')
      const id = urlParts.at(-2) ?? 0

      return {
        name: pokemon.name,
        id: +id,
      }
    })

    return pokemonsArray.sort(() => Math.random() - 0.5)
  }

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing
    pokemonOptions.value.slice(0, howMany)
    pokemons.value.slice(0, howMany)
  }

  onMounted(async () => {
    const pokemons = await getPokemons()

    getNextOptions()
  })

  return { gameStatus, getPokemons, isLoading, getNextOptions }
}
