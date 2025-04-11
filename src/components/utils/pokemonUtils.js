/**
 * Funções utilitárias para manipulação de dados dos Pokémon:
 * - getPokemonId: Extrai o ID do Pokémon da URL da API
 * - getPokemonName: Formata o nome do Pokémon com a primeira letra maiúscula
 * - typeColor: Retorna a cor correspondente ao tipo do Pokémon (Vuetify)
 * - getStatColor: Retorna a cor correspondente à estatística do Pokémon (Vuetify)
 * - fetchPokemonDetails: Busca detalhes completos de um Pokémon na API
 * - getPokemonImageUrl: Retorna a URL da imagem oficial ou sprite do Pokémon
 */

export const getPokemonId = (pokemon) => {
  return Number(pokemon.url.split("/")[6])
}

export const getPokemonName = (pokemon) => {
  return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
}

export const typeColor = (type) => {
  const typeColors = {
    bug: 'light-green',
    dark: 'grey-darken-3',
    dragon: 'indigo-darken-3',
    electric: 'yellow',
    fairy: 'pink-lighten-3',
    fighting: 'red-darken-3',
    fire: 'deep-orange',
    flying: 'light-blue-lighten-3',
    ghost: 'indigo',
    grass: 'green',
    ground: 'amber-darken-2',
    ice: 'light-blue',
    normal: 'grey',
    poison: 'purple',
    psychic: 'pink',
    rock: 'brown',
    steel: 'blue-grey',
    water: 'blue'
  }

  return typeColors[type] || 'grey'
}

export const getStatColor = (stat) => {
  const statColors = {
    attack: 'red',
    defense: 'blue',
    hp: 'green',
    speed: 'yellow-darken-2'
  }

  return statColors[stat] || 'grey'
}

export const fetchPokemonDetails = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching Pokémon details:', error)
    return null
  }
}

export const getPokemonImageUrl = (id, useOfficialArt = false) => {
  if (useOfficialArt) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
