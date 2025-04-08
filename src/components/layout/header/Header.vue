<template>
    <v-layout>
      <v-app-bar
        color="indigo"
        dark
      >
      
        <v-app-bar-title>
          <v-img
            :src="logo_src"
            :alt="alt"
            max-height="40"
            max-width="40"
            class="mr-2"
          ></v-img>
          My Pokedex App
        </v-app-bar-title>
        
        <!-- Add your navigation items here -->
        <v-spacer></v-spacer>
        
        <!-- Example menu items -->
        <v-btn variant="text">Home</v-btn>
        <v-btn variant="text">About</v-btn>
      </v-app-bar>
  
      <!-- Main content area -->
      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </template>
  
  <script setup>
  defineProps({
    logo: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Logo'
    }
  })
  </script>