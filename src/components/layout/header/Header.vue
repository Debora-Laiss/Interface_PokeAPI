<template>
  <v-layout>
    <v-app-bar :elevation="0" :color="theme.global.current.value.colors.primary">
      <!-- Pokebola + Texto -->
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

      <v-spacer />

      <!-- Navegação Desktop -->
      <div class="d-none d-sm-flex align-center">
        <RouterLink to="/" custom v-slot="{ navigate, href }">
          <v-btn :href="href" @click="navigate" variant="text" class="mx-1" prepend-icon="mdi-home">
            {{ t('nav.home') }}
          </v-btn>
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{ navigate, href }">
          <v-btn :href="href" @click="navigate" variant="text" class="mx-1" prepend-icon="mdi-information">
            {{ t('nav.about') }}
          </v-btn>
        </RouterLink>
        
        <!-- Seletor de idioma -->
        <v-btn-toggle
          v-model="selectedLocale"
          @update:modelValue="changeLocale"
          density="compact"
          class="ml-4"
          color="white"
          divided
          mandatory
        >
          <v-btn value="pt">PT</v-btn>
          <v-btn value="en">EN</v-btn>
          <v-btn value="es">ES</v-btn>
        </v-btn-toggle>
        
        <!-- Botão Darkmode Desktop -->
        <v-btn
          :icon="theme.global.current.value.dark ? 'mdi-brightness-7' : 'mdi-weather-night'"
          @click="toggleTheme"
          variant="text"
          :color="theme.global.current.value.dark ? 'yellow' : 'white'"
          class="ml-2"
        />
      </div>
      
      <!-- Navegação Mobile -->
      <template v-slot:append>
        <div class="d-flex d-sm-none align-center">
          <RouterLink to="/" custom v-slot="{ navigate, href }">
            <v-btn :href="href" @click="navigate" size="small" prepend-icon="mdi-home" variant="text" class="mobile-nav-btn">
              Home
            </v-btn>
          </RouterLink>

          <RouterLink to="/about" custom v-slot="{ navigate, href }">
            <v-btn :href="href" @click="navigate" prepend-icon="mdi-information" size="small" variant="text" class="mobile-nav-btn">
              Sobre
            </v-btn>
          </RouterLink>
          
          <!-- Botão Darkmode Mobile -->
          <v-btn
            :icon="theme.global.current.value.dark ? 'mdi-brightness-7' : 'mdi-weather-night'"
            @click="toggleTheme"
            variant="text"
            size="small"
            :color="theme.global.current.value.dark ? 'yellow' : 'white'"
            class="mobile-darkmode-btn"
          />
        </div>
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const theme = useTheme()
const { t, locale } = useI18n()

//DarkMode
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}


const selectedLocale = ref(locale.value)

const changeLocale = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

onMounted(() => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    locale.value = savedLocale
    selectedLocale.value = savedLocale
  }
})
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

/* Estilos responsivos */
@media (max-width: 600px) {
  .pokedex--text {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  
  .mobile-nav-btn {
    padding: 0 8px !important;
    min-width: auto !important;
  }
  
  .mobile-darkmode-btn {
    margin-left: 4px;
  }
}
</style>