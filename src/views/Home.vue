<template>
  <v-app>
    <v-container>
      <v-img
        src="/src/assets/img-principal.svg"
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

import PokemonCard from '../components/pokemon/PokemonCard.vue'
import PokemonInfoDialog from '../components/dialogs/PokemonInfoDialog.vue'

const pokemons = ref([])
const search = ref('')
const showDialog = ref(false)
const selectedPokemon = ref(null)
const viewType = ref('grid')

onMounted(async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=493')
  pokemons.value = response.data.results
})

const showPokemon = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  selectedPokemon.value = response.data
  showDialog.value = true
}

const getPokemonId = (url) => {
  const id = url.split('/').filter(segment => segment !== '').pop()
  return parseInt(id)
}

const getMoveLevel = (move) => {
  for (let version of move.version_group_details) {
    if (
      version.version_group.name === 'sword-shield' &&
      version.move_learn_method.name === 'level-up'
    ) {
      return version.level_learned_at
    }
  }
  return 0
}

const filteredPokemons = computed(() => {
  if (!search.value.trim()) {
    return pokemons.value
  }
  return pokemons.value.filter((item) => 
    item.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
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
</style>