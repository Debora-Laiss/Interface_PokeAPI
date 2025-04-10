<template>
    <v-img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
      height="250"
      class="bg-transparent mb-3 mt-16 pokemon-img"
      contain
    ></v-img>
  
    <v-card-title class="about-title text-h4 text-center font-weight-bold mb-4">
        {{ $t('about.title') }}
    </v-card-title>
    
    <v-card-text class="text-body-1">
      <!-- Introdução -->
      <p class="mb-4">
        {{ $t('about.intro') }}
      </p>

  
      <v-divider class="my-4" />
  
        <!-- Sobre a Pokédex -->
        <h3 class="text-h6 font-weight-bold mb-3">{{ $t('about.pokedex_title') }}</h3>
        <p class="mb-4">
        {{ $t('about.pokedex_text') }}
        </p>

        <!-- Funcionalidades -->
        <h3 class="text-h6 font-weight-bold mb-3">{{ $t('about.features_title') }}</h3>
        <v-list :bg-color="darkMode ? 'grey-darken-4' : 'red-darken-2'">
        <v-list-item
            v-for="(feature, index) in features"
            :key="index"
            :prepend-icon="feature.icon"
            :title="feature.title"
            :subtitle="feature.description"
            :class="darkMode ? 'text-white' : 'text-black'"
        />
        </v-list>

        <!-- Tecnologias -->
        <h3 class="text-h6 font-weight-bold my-3">{{ $t('about.technologies_title') }}</h3>
        <v-chip-group>
        <v-chip
            v-for="tech in technologies"
            :key="tech.name"
            :color="tech.color"
            class="ma-1"
            label
        >
            <v-icon start>{{ tech.icon }}</v-icon>
            {{ tech.name }}
        </v-chip>
        </v-chip-group>

        <v-divider class="my-4" />

        <!-- Sobre a desenvolvedora -->
        <h3 class="text-h6 font-weight-bold mb-3">{{ $t('about.dev_title') }}</h3>
        <div class="d-flex flex-column flex-md-row align-center mb-4">
        <v-avatar size="100" class="ma-4">
            <v-img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
            alt="Developer Avatar"
            />
        </v-avatar>
        <div>
            <p class="font-weight-bold text-h6 mb-1">Debora Lais</p>
            <p class="text-body-1">
            {{ $t('about.dev_text') }}
            </p>
        </div>
        </div>

        <!-- Créditos -->
        <h3 class="text-h6 font-weight-bold mb-3">{{ $t('about.thanks_title') }}</h3>
        <p>
        {{ $t('about.thanks_text') }}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>,
        {{ $t('about.thanks_extra') }}
        </p>
            </v-card-text>
  
    <!-- Botões de ação -->
    <v-card-actions class="justify-center pa-4">
      <v-btn
        color="red-darken-1"
        variant="elevated"
        :prepend-icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-pokeball'"
        :class="darkMode ? 'text-white' : ''"
        @click="$router.push('/')"
      >
        Return to Pokédex
      </v-btn>
  
      <v-btn
        color="blue-darken-1"
        variant="elevated"
        prepend-icon="mdi-github"
        :class="darkMode ? 'text-white' : ''"
        href="https://github.com/Debora-Laiss/Interface_PokeAPI"
        target="_blank"
      >
        View Source Code
      </v-btn>
    </v-card-actions>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'

    const { t } = useI18n()

    const features = computed(() => [
    {
        icon: 'mdi-magnify',
        title: t('about.features.search.title'),
        description: t('about.features.search.description')
    },
    {
        icon: 'mdi-information-outline',
        title: t('about.features.info.title'),
        description: t('about.features.info.description')
    },
    {
        icon: 'mdi-palette',
        title: t('about.features.type.title'),
        description: t('about.features.type.description')
    },
    {
        icon: 'mdi-chart-line',
        title: t('about.features.stats.title'),
        description: t('about.features.stats.description')
    }
    ])
  
  const technologies = [
    { name: 'Vue.js 3', icon: 'mdi-vuejs', color: 'green' },
    { name: 'Vuetify 3', icon: 'mdi-view-dashboard', color: 'blue' },
    { name: 'PokéAPI', icon: 'mdi-api', color: 'red-darken-2' },
    { name: 'Axios', icon: 'mdi-arrow-decision', color: 'purple' },
    { name: 'Vite', icon: 'mdi-lightning-bolt', color: 'pink' },
    { name: 'JavaScript', icon: 'mdi-language-javascript', color: 'yellow' }
  ]
  </script>
  
  <style scoped>
  .pokemon-img {
    animation: float 6s ease-in-out infinite;
  }

  .about-title {
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

  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  a {
    color: inherit;
    text-decoration: underline;
    font-weight: bold;
  }
  </style>
  