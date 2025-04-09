<template>
  <v-layout>
    <v-app-bar :elevation="0" :color="theme.global.current.value.colors.primary">
     
      <template v-slot:prepend>
        <div class="d-flex align-center">
          <v-avatar class="mr-3 pokeball-spin" size="50">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="Pokeball"
            />
          </v-avatar>
          <v-app-bar-title class="text-h5 font-roboto font-weight-bold">
            <span class="pokedex--text">Pokédex</span>
          </v-app-bar-title>
        </div>
      </template>

      <v-spacer></v-spacer>

      
      <v-btn variant="text" class="mx-1" prepend-icon="mdi-home">Home</v-btn>
      <v-btn variant="text" class="mx-1" prepend-icon="mdi-information">About</v-btn>

     
      <template v-slot:append>
        <v-btn
          :icon="theme.global.current.value.dark ? 'mdi-brightness-7' : 'mdi-weather-night'"
          @click="toggleTheme"
          variant="text"
          :color="theme.global.current.value.dark ? 'yellow' : 'white'"
        />
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>
.pokeball-spin {
  transition: transform 0.6s ease;
}

.pokeball-spin:hover {
  transform: rotate(360deg);
}

:deep(.v-toolbar__image) {
  opacity: 0.8 !important;
}
.pokedex--text {
  color: #ffcb05;
  text-shadow: 4px 4px 0 #3b5ba7, 
              -2px -2px 0 #516699, 
              2px -2px 0 #3b5ba7, 
              -2px 2px 0 #3b5ba7, 
              2px 2px 0 #3b5ba7;
  letter-spacing: 2px;
}
</style>
