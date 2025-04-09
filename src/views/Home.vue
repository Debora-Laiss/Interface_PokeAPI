<template>
    <v-app>
      <v-container>
        <v-img
            src="/src/assets/pokedex.png"
            class="my-12 " 
            
            height="150px"
          />
        <h1 class="text-center white--text mb-4" style="font-size: 5rem">
          Pokedex
        </h1>
  
        <v-text-field
          v-model="search"
          label="Pesquisar"
          placeholder="Charmander"
          solo
        />
  
        <v-row>
          <v-col
            cols="6"
            md="2"
            v-for="pokemon in filteredPokemons"
            :key="pokemon.name"
          >
            <PokemonCard :pokemon="pokemon" @clicked="showPokemon" />
          </v-col>
        </v-row>
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
  
  onMounted(async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=493')
    pokemons.value = response.data.results
  })
  
  const showPokemon = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    selectedPokemon.value = response.data
    showDialog.value = true
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
    return pokemons.value.filter((item) => item.name.includes(search.value))
  })
  </script>
  
  <style>
  #app {
    background: linear-gradient(
        to bottom right,
        rgba(10, 10, 10, 1),
        rgba(12, 39, 63, 1)
      )
      no-repeat center center fixed !important;
    background-size: cover !important;
    background-position: center;
    min-height: 100vh;
  }
  </style>
  