import { computed, onMounted, ref } from 'vue'
import { GameStatus } from '../interfaces/game-status.enum'
import { pokemonApi } from '../api/pokemonApi'
import type { Pokemon, PokemonListResponse } from '../interfaces'

export const UsePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonOptions = ref<Pokemon[]>([])

  const randomPokemon = computed(
    () => pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)],
  )

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

    // 1. Asignamos los primeros 'howMany' al arreglo de opciones
    pokemonOptions.value = pokemons.value.slice(0, howMany)

    // 2. Reasignamos el arreglo principal quitando los que ya usamos
    pokemons.value = pokemons.value.slice(howMany)
  }

  onMounted(async () => {
    // CORRECCIÓN: Asignamos a pokemons.value en lugar de crear una variable local
    pokemons.value = await getPokemons()
    getNextOptions()

    console.log(pokemonOptions.value)
  })

  return { gameStatus, getPokemons, isLoading, getNextOptions, randomPokemon }
}
