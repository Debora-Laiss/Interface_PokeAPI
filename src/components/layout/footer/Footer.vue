<template>
    <v-footer
      class="text-center d-flex flex-column ga-4 py-6 px-4"
      color="indigo-darken-4"
    >
      <!-- Social Icons -->
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
  
      <!-- Divider -->
      <v-divider class="my-4" thickness="2" width="60" color="white" />
  
      <!-- Texto -->
      <div class="text-caption font-weight-regular text-white px-md-16">
        Esse projeto foi desenvolvido por Debora Lais com muito carinho 💖 como parte de um estudo em Vue.js e Vuetify.
      </div>
  
      <!-- Copyright -->
      <v-divider class="my-4" color="white" />
  
      <div class="text-white">
        {{ new Date().getFullYear() }} — <strong>Pokedex by Debora</strong>
      </div>
    </v-footer>
  </template>
  
  <script setup>
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
      url: 'www.linkedin.com/in/debora-lais',
    },
    {
      icon: 'mdi-instagram',
      url: 'https://instagram.com',
    },
  ]
  </script>
  