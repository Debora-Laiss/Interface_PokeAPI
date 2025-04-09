<template>
  <v-card 
    @click="show_pokemon(pokemonId)" 
    :flat="flat"
    class="pokemon-card"
    :class="`pokemon-type-${pokemonType}`"
    elevation="4"
    hover
    rounded="lg"
    max-width="500px"
  >
    <v-container>
      <!-- Cabeçalho da carta: ID e Tipo -->
      <div class="d-flex justify-space-between align-center mb-2">
        <v-chip 
          :color="getTypeColor(pokemonType)" 
          label
          class="font-weight-bold"
        >
          #{{ pokemonId }}
        </v-chip>
        <PokemonType :type="pokemonType" />
      </div>

      <!-- Imagem do Pokémon com loading -->
      <v-card-text class="pa-0">
        <v-row class="mx-0 d-flex justify-center pokemon-image-container">
          <v-img
            :src="imageUrl"
            :alt="pokemon.name"
            max-height="200"
            contain
            class="pokemon-image"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey" />
              </v-row>
            </template>
          </v-img>
        </v-row>
      </v-card-text>

      <!-- Nome do Pokémon -->
      <v-card-title class="text-center d-block pa-2 text-h5">
        {{ pokemonName }}
      </v-card-title>

      <!-- Stats, se disponíveis -->
      <v-card-subtitle v-if="pokemonStats" class="text-center d-block pa-5 text-h5">
        <PokemonStats :pokemon="pokemonStats" />
      </v-card-subtitle>
    </v-container>
  </v-card>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { 
  getPokemonId, 
  getPokemonName, 
  getPokemonImageUrl, 
  fetchPokemonDetails, 
  typeColor 
} from '../utils/pokemonUtils';

import PokemonType from './PokemonType.vue';
import PokemonStats from './Stats.vue';

export default {
  name: 'PokemonCard',
  components: {
    PokemonType,
    PokemonStats
  },
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    flat: {
      type: Boolean,
      default: false,
    },
    useOfficialArt: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const pokemonType = ref('normal');
    const pokemonStats = ref(null);

    const pokemonId = computed(() => getPokemonId(props.pokemon));
    const pokemonName = computed(() => getPokemonName(props.pokemon));
    const imageUrl = computed(() => getPokemonImageUrl(pokemonId.value, props.useOfficialArt));

    
    onMounted(async () => {
      const details = await fetchPokemonDetails(pokemonId.value);
      if (details) {
        pokemonType.value = details.types[0].type.name;
        pokemonStats.value = details;
      }
    });

    const show_pokemon = (id) => emit("clicked", id);
    const showDetails = () => emit("show-details", pokemonId.value);
    const getTypeColor = (type) => typeColor(type);

    return {
      pokemonId,
      pokemonName,
      imageUrl,
      pokemonType,
      pokemonStats,
      show_pokemon,
      showDetails,
      getTypeColor
    };
  }
};
</script>

<style scoped>
.pokemon-card {
  transition: transform 0.2s ease;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.pokemon-image {
  transition: transform 0.3s ease;
}

.pokemon-card:hover .pokemon-image {
  transform: scale(1.05);
}

.pokemon-name {
  font-weight: bold;
  text-transform: capitalize;
}
</style>
