<template>
    <v-chip-group column class="mb-4">
      <v-chip
        v-for="game in gameIndices"
        :key="game.version.name"
        :color="getGameColor(game.version.name)"
        class="ma-1 white--text text-capitalize"
        label
      >
        {{ formatGameName(game.version.name) }}
      </v-chip>
    </v-chip-group>
  </template>
  
  <script setup>
  const props = defineProps({
    gameIndices: {
      type: Array,
      required: true
    }
  })
  
  const formatGameName = (name) => {
    return name
      .split("-")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }
  
  const getGameColor = (name) => {
    if (name.includes("gold")) return "amber darken-3";
    if (name.includes("silver")) return "blue-grey lighten-2";
    if (name.includes("crystal")) return "cyan lighten-2";
    if (name.includes("ruby")) return "red darken-2";
    if (name.includes("sapphire")) return "indigo darken-2";
    if (name.includes("emerald")) return "green darken-2";
    if (name.includes("firered") || name.includes("red")) return "red accent-4";
    if (name.includes("leafgreen") || name.includes("green")) return "light-green darken-1";
    if (name.includes("diamond")) return "blue lighten-1";
    if (name.includes("pearl")) return "pink lighten-3";
    if (name.includes("platinum")) return "grey lighten-1";
    if (name.includes("heartgold")) return "orange darken-1";
    if (name.includes("soulsilver")) return "blue lighten-4";
    if (name.includes("black")) return "grey darken-4";
    if (name.includes("white")) return "blue-grey lighten-3";
    return "deep-purple accent-2";
  }
  </script>
  