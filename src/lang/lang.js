import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
        home: "Home",
        about: "About"
      },

    about: {
      title: "About This Pokédex",
      intro: "Welcome to my Pokédex application! This project was developed as a study in Vue.js and Vuetify, bringing the world of Pokémon to life through modern web technologies.",
      pokedex_title: "About the Pokédex",
      pokedex_text: "The Pokédex is an electronic device designed to catalog and provide information about the various species of Pokémon. In the Pokémon universe, it was created by Professor Oak as an invaluable tool for Pokémon Trainers. This digital version connects to the PokéAPI to bring you detailed information about your favorite Pokémon.",
      features_title: "Features",
      features: {
        search: {
          title: "Search Pokémon",
          description: "Find any Pokémon by name with our easy-to-use search feature"
        },
        info: {
          title: "Detailed Information",
          description: "View comprehensive stats, abilities, moves, and evolution chains"
        },
        type: {
          title: "Type Information",
          description: "Each Pokémon displays its types with color-coded badges"
        },
        stats: {
          title: "Stats Visualization",
          description: "View Pokémon stats in an easy-to-understand graphical format"
        }
      },
      technologies_title: "Technologies Used",
      dev_title: "About Me",
      dev_text: "Pokémon Trainer and Web Developer passionate about creating interactive, educational, and fun applications. When I'm not coding, you can find me exploring new regions looking for rare Pokémon!",
      thanks_title: "Special Thanks",
      thanks_text: "This project wouldn't be possible without the amazing ",
      thanks_extra: "and also thanks to the Vue.js and Vuetify communities for their excellent documentation and support.",
      back: "Back to Pokédex",
      source: "View Source Code"
    }
  },

  pt: {
    nav: {
        home: "Início",
        about: "Sobre"
      },
  
    about: {
      title: "Sobre esta Pokédex",
      intro: "Bem-vindo ao meu aplicativo da Pokédex! Este projeto foi desenvolvido como um estudo em Vue.js e Vuetify, trazendo o mundo Pokémon à vida com tecnologias web modernas.",
      pokedex_title: "Sobre a Pokédex",
      pokedex_text: "A Pokédex é um dispositivo eletrônico criado pelo Professor Oak para catalogar e fornecer informações sobre as diversas espécies de Pokémon. Esta versão digital conecta-se à PokéAPI para trazer informações detalhadas sobre seus Pokémon favoritos.",
      features_title: "Funcionalidades",
      features: {
        search: {
          title: "Buscar Pokémon",
          description: "Encontre qualquer Pokémon pelo nome facilmente"
        },
        info: {
          title: "Informações Detalhadas",
          description: "Veja estatísticas, habilidades, movimentos e evolução"
        },
        type: {
          title: "Informações de Tipo",
          description: "Exibe os tipos com emblemas coloridos"
        },
        stats: {
          title: "Visualização de Estatísticas",
          description: "Estatísticas em formato gráfico fácil de entender"
        }
      },
      technologies_title: "Tecnologias Usadas",
      dev_title: "Sobre Mim",
      dev_text: "Treinadora Pokémon e desenvolvedora web apaixonada por criar apps educativos e divertidos. Quando não estou programando, estou explorando novas regiões em busca de Pokémon raros!",
      thanks_title: "Agradecimentos Especiais",
      thanks_text: "Este projeto não seria possível sem a incrível ",
      thanks_extra: "e também às comunidades do Vue.js e Vuetify pela excelente documentação e suporte.",
      back: "Voltar para a Pokédex",
      source: "Ver Código Fonte"
    }
  },

  es: {
    nav: {
        home: "Inicio",
        about: "Acerca de"
      },
      
    about: {
      title: "Acerca de esta Pokédex",
      intro: "¡Bienvenido a mi aplicación Pokédex! Este proyecto fue desarrollado como un estudio en Vue.js y Vuetify, dando vida al mundo Pokémon con tecnologías web modernas.",
      pokedex_title: "Sobre la Pokédex",
      pokedex_text: "La Pokédex es un dispositivo electrónico creado por el Profesor Oak para catalogar y brindar información sobre las diferentes especies de Pokémon. Esta versión digital se conecta a la PokéAPI para traerte información detallada sobre tus Pokémon favoritos.",
      features_title: "Características",
      features: {
        search: {
          title: "Buscar Pokémon",
          description: "Encuentra cualquier Pokémon por nombre fácilmente"
        },
        info: {
          title: "Información Detallada",
          description: "Consulta estadísticas, habilidades, movimientos y evolución"
        },
        type: {
          title: "Información de Tipo",
          description: "Cada Pokémon muestra sus tipos con insignias codificadas por color"
        },
        stats: {
          title: "Visualización de Estadísticas",
          description: "Estadísticas presentadas en un formato gráfico fácil de entender"
        }
      },
      technologies_title: "Tecnologías Utilizadas",
      dev_title: "Sobre Mí",
      dev_text: "Entrenadora Pokémon y desarrolladora web apasionada por crear aplicaciones educativas, interactivas y divertidas. ¡Cuando no estoy programando, estoy explorando nuevas regiones en busca de Pokémon raros!",
      thanks_title: "Agradecimientos Especiales",
      thanks_text: "Este proyecto no sería posible sin la increíble ",
      thanks_extra: "y también a las comunidades de Vue.js y Vuetify por su excelente documentación y apoyo.",
      back: "Volver a la Pokédex",
      source: "Ver Código Fuente"
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt', 
  fallbackLocale: 'en',
  messages,
  globalInjection: true, 
  silentFallbackWarn: false, 
  missingWarn: false,
  fallbackWarn: false
})
  
  export default i18n
