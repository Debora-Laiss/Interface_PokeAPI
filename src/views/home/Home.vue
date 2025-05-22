<template>
  <v-app>
    <v-container>
      <v-img
        :src="imgPrincipal"
        class=" mx-auto mt-15 "
        height="150px"
        contain
      />
      
      <!-- Título  -->
      <h1 class="pokedex-title text-center mb-6">Pokedex</h1>
      
      <!-- Barra de pesquisa  -->
      <v-card class="search-card mx-auto mb-8" max-width="600" elevation="4" color="gray">
        <v-text-field
          v-model="search"
          label="Pesquisar"
          placeholder="Charmander"
          prepend-inner-icon="mdi-magnify"
          solo
          hide-details
          class="search-field"
          density="comfortable"
        />
      </v-card>
      
      <!-- Botões para mudar visualização -->
      <div class="d-flex justify-end mb-4">
        <v-btn-toggle v-model="viewType" color="primary" density="comfortable">
          <v-btn value="grid">
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
          <v-btn value="list">
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>
      
      <!-- Cards de Pokémon -->
      <v-row v-if="viewType === 'grid'">
        <v-col
          cols="6"
          md="2"
          v-for="pokemon in filteredPokemons"
          :key="pokemon.name"
        >
          <PokemonCard :pokemon="pokemon" @clicked="showPokemon" />
        </v-col>
      </v-row>
      
      <!-- Lista de Pokémon -->
      <div v-if="viewType === 'list'">
        <v-card 
          v-for="pokemon in filteredPokemons" 
          :key="pokemon.name" 
          class="mb-2 pokemon-list-item" 
          @click="showPokemon(getPokemonId(pokemon.url))"
        >
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar size="40" class="mr-3">
                <v-img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`" />
              </v-avatar>
            </template>
            <v-list-item-title class="text-capitalize">{{ pokemon.name }}</v-list-item-title>
            <v-list-item-subtitle>#{{ getPokemonId(pokemon.url).toString().padStart(3, '0') }}</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </div>
    </v-container>

    <PokemonInfoDialog
      v-model:show="showDialog"
      :selected_pokemon="selectedPokemon"
    />
  </v-app>

  <!-- Sentinela para scroll infinito -->
<div ref="scrollObserver" class="observer" />

</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import axios from 'axios'

import PokemonCard from '../../components/pokemon/PokemonCard.vue'
import PokemonInfoDialog from '../../components/dialogs/PokemonInfoDialog.vue'
import imgPrincipal from '../../assets/img-principal.svg'

const pokemons = ref([])
const search = ref('')
const showDialog = ref(false)
const selectedPokemon = ref(null)
const viewType = ref('grid')

// Scroll infinito
const filteredPokemons = ref([])

const limit = ref(24)
const offset = ref(0)
const isLoading = ref(false)
const scrollObserver = ref(null)
let observer = null

const detailsCache = new Map()

const getPokemonId = (url) => {
  const id = url.split('/').filter(segment => segment !== '').pop()
  return parseInt(id)
}

const fetchDetails = async (pokemon) => {
  const id = getPokemonId(pokemon.url)
  if (!detailsCache.has(id)) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    detailsCache.set(id, response.data)
  }
}

const loadMorePokemons = async () => {
  if (isLoading.value) return

  isLoading.value = true
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${limit.value}`)
  pokemons.value.push(...response.data.results)
  offset.value += limit.value
  isLoading.value = false
}

const createObserver = () => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadMorePokemons()
    }
  })

  if (scrollObserver.value) {
    observer.observe(scrollObserver.value)
  }
}

onMounted(() => {
  loadMorePokemons()
  createObserver()
})

onBeforeUnmount(() => {
  if (observer && scrollObserver.value) {
    observer.unobserve(scrollObserver.value)
  }
})

// Utilidades
const showPokemon = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  selectedPokemon.value = response.data
  showDialog.value = true
}

// WATCH para atualizar filtro toda vez que o termo de busca mudar
watch(search, async (newVal) => {
  const term = newVal.toLowerCase().trim()
  if (!term) {
    filteredPokemons.value = pokemons.value
    return
  }

  // Busca detalhes de todos pokemons para filtrar por tipo
  await Promise.all(pokemons.value.map(pokemon => fetchDetails(pokemon)))

  // Filtra por nome, id e tipo
  filteredPokemons.value = pokemons.value.filter(pokemon => {
    const nameMatch = pokemon.name.toLowerCase().includes(term)
    const id = getPokemonId(pokemon.url)
    const idMatch = id.toString() === term
    const details = detailsCache.get(id)
    const typeMatch = details?.types.some(typeInfo =>
      typeInfo.type.name.toLowerCase().includes(term)
    )

    return nameMatch || idMatch || typeMatch
  })
}, { immediate: true })

</script>

<style>
.pokedex-title {
  font-size: 5rem;
  font-weight: 700;
  color: #ffcb05;
  text-shadow: 4px 4px 0 #3b5ba7, 
              -2px -2px 0 #516699, 
              2px -2px 0 #3b5ba7, 
              -2px 2px 0 #3b5ba7, 
              2px 2px 0 #3b5ba7;
  letter-spacing: 2px;
}


@media (max-width: 600px) {
  .pokedex-title {
    font-size: 3rem;
  }
}
.observer {
  height: 1px;
}

</style>