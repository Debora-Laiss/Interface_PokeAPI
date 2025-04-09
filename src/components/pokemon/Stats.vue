<template>
  <v-row class="stats-row" justify="center" align="center" no-gutters>
    <v-chip
      v-for="(value, key) in statMap"
      :key="key"
      :color="getStatColor(key)"
      class="ma-1 stat-chip"
      label
      small
    >
      {{ key }} {{ value }}
    </v-chip>
  </v-row>
</template>

<script>
export default {
  name: 'PokemonStats',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  computed: {
    statMap() {
      return {
        hp: this.pokemon.stats[0].base_stat,
        atk: this.pokemon.stats[1].base_stat,
        def: this.pokemon.stats[2].base_stat,
        spAtk: this.pokemon.stats[3].base_stat,
        spDef: this.pokemon.stats[4].base_stat,
        spd: this.pokemon.stats[5].base_stat
      };
    }
  },
  methods: {
    getStatColor(stat) {
      const colors = {
        hp: 'pink lighten-4',
        atk: 'orange lighten-4',
        def: 'blue lighten-4',
        spAtk: 'red darken-4',
        spDef: 'green lighten-4',
        spd: 'red lighten-4'
      };
      return colors[stat] || 'grey lighten-3';
    }
  }
};
</script>

<style scoped>
.stats-row {
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  max-width: 100%;
}
.stat-chip {
  font-size: 12px;
  min-width: 70px;
  justify-content: center;
}
</style>
