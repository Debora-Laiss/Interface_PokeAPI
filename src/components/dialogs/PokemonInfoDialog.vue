<template>
    <v-dialog v-model="internalShow" width="800">
      <v-card v-if="selectedPokemon" class="px-4">
        <v-container>
          <v-row class="d-flex align-center">
            <v-col cols="12" md="4">
              <img
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png`"
                :alt="selectedPokemon.name"
                width="80%"
              />
            </v-col>
            <v-col cols="12" md="8">
              <h1>{{ getName(selectedPokemon) }}</h1>
              <PokemonType
                v-for="type in selectedPokemon.types"
                :key="type.slot"
                :type="type.type.name"
              />
  
              <v-divider class="my-4"></v-divider>
              <v-chip label>Height {{ selectedPokemon.height * 2.54 }} cm</v-chip>
              <v-chip label class="ml-2">
                Weight {{ (selectedPokemon.weight * 0.45359237).toFixed(0) }} kgs
              </v-chip>
            </v-col>
          </v-row>
  
          <h2 class="mt-4">Stats</h2>
          <Stats class="mt-2" :pokemon="selectedPokemon" />
  
          <h2 class="mt-6 mb-4">Moves</h2>
  
          <v-expansion-panels class="mb-4">
            <v-expansion-panel
              v-for="moveType in ['level-up', 'egg', 'machine', 'tutor']"
              :key="moveType"
            >
              <v-expansion-panel-title>{{ moveType }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Level</th>
                      <th class="text-left">Method</th>
                      <th class="text-left">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="move in moves[moveType]" :key="move.name">
                      <td>
                        <span v-show="move.level !== 0">{{ move.level }}</span>
                      </td>
                      <td><MoveMethodImage :method="move.method" /></td>
                      <td>{{ move.name }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
  
          <h2>Evolution</h2>
          <EvolutionChain :pokemon="selectedPokemon" />
        </v-container>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { computed, watch, ref } from 'vue'
  import MoveMethodImage from '../pokemon/MoveMethodImage.vue'
  import EvolutionChain from '../pokemon/EvolutionChain.vue'
  import Stats from '../pokemon/Stats.vue'
  import PokemonType from '../pokemon/PokemonType.vue'
  
  const props = defineProps({
    show: Boolean,
    selected_pokemon: Object
  })
  
  const emit = defineEmits(['update:show'])
  
  const internalShow = ref(props.show)
  watch(() => props.show, (val) => {
    internalShow.value = val
  })
  watch(internalShow, (val) => {
    emit('update:show', val)
  })
  
  const selectedPokemon = computed(() => props.selected_pokemon)
  
  const getName = (pokemon) => {
    return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  }
  
  const transformMoveName = (name) => {
    return name
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
  }
  
  const moves = computed(() => {
    const response = {
      'level-up': [],
      egg: [],
      machine: [],
      tutor: []
    }
  
    for (const move of selectedPokemon.value.moves) {
      for (const details of move.version_group_details) {
        if (details.version_group.name === 'sword-shield') {
          response[details.move_learn_method.name].push({
            level: details.level_learned_at,
            method: details.move_learn_method.name,
            name: transformMoveName(move.move.name)
          })
          break
        }
      }
    }
  
    for (const moveType in response) {
      response[moveType].sort((a, b) => {
        const levelA = a.level === 0 ? 1000 : a.level
        const levelB = b.level === 0 ? 1000 : b.level
        if (levelA !== levelB) return levelA - levelB
        return a.method.localeCompare(b.method)
      })
    }
  
    return response
  })
  </script>
  
  <style scoped lang="scss"></style>