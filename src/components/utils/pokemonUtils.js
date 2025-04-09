

/**
 * Extrai o ID do Pokémon da URL
 * @param {Object} pokemon - O objeto Pokémon retornado pela API
 * @returns {Number} - O ID do Pokémon
 */
export const getPokemonId = (pokemon) => {
    return Number(pokemon.url.split("/")[6])
  };
  
  /**
   * Formata o nome do Pokémon com a primeira letra maiúscula
   * @param {Object} pokemon - O objeto Pokémon retornado pela API
   * @returns {String} - O nome formatado do Pokémon
   */
  export const getPokemonName = (pokemon) => {
    return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  };
  
  /**
   * Retorna a cor correspondente ao tipo do Pokémon
   * @param {String} type - O tipo do Pokémon
   * @returns {String} - A cor no formato Vuetify
   */
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
  
  /**
   * Retorna a cor correspondente à estatística do Pokémon
   * @param {String} stat - A estatística (hp, attack, defense, etc.)
   * @returns {String} - A cor no formato Vuetify
   */
  export const getStatColor = (stat) => {
    const statColors = {
        attack: 'red',
        defense: 'blue',
        hp: 'green',
        speed: 'yellow-darken-2'
      };
    return statColors[stat] || 'grey'
  }
  
  /**
   * Busca detalhes completos de um Pokémon na API
   * @param {Number} id - O ID do Pokémon
   * @returns {Object|null} - Os dados do Pokémon ou null em caso de erro
   */
  export const fetchPokemonDetails = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching Pokémon details:', error)
      return null
    }
  }
  
  /**
   * Retorna a URL da imagem oficial do Pokémon
   * @param {Number} id - O ID do Pokémon
   * @param {Boolean} useOfficialArt - Se deve usar a arte oficial em vez do sprite
   * @returns {String} - A URL da imagem
   */
  export const getPokemonImageUrl = (id, useOfficialArt = false) => {
    if (useOfficialArt) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }