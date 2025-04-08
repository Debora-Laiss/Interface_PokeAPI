<template>
  <v-footer
    class="text-center d-flex flex-column ga-4 py-6 px-4"
    :color="theme.global.current.value.colors.primary"
  >
    
    <div class="d-flex justify-center ga-4">
      <a
        v-for="social in socialLinks"
        :key="social.icon"
        :href="social.url"
        target="_blank"
        rel="noopener"
      >
        <v-btn
          :icon="social.icon"
          color="white"
          variant="text"
          size="large"
        />
      </a>
    </div>

   
    <v-divider class="my-4" thickness="2" width="60" color="white" />

    <div class="text-caption font-weight-regular px-md-16 text-white">
      Esse projeto foi desenvolvido por Debora Lais com muito carinho 💖 
    </div>  
    <v-divider class="my-4" color="white" />

    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>Pokedex by Debora</strong>
    </div>
  </v-footer>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const socialLinks = [
  {
    icon: 'mdi-facebook',
    url: 'https://facebook.com',
  },
  {
    icon: 'mdi-github',
    url: 'https://github.com/Debora-Laiss/Interface_PokeAPI',
  },
  {
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/debora-lais',
  },
  {
    icon: 'mdi-instagram',
    url: 'https://instagram.com',
  },
]
</script>
