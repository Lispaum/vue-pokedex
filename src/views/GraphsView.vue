<script setup lang="ts">

import { ref, onMounted, computed } from 'vue';
import PokemonDetailsCard from "../components/PokemonDetailsCard.vue";
import { Pokemon } from './HomeView.vue';

type PokemonLink = {
  name: string;
  url: string;
};


const pokemons = ref<PokemonLink[]>([]);
const baseImageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const searchPokemonField = ref("");
const selectedPokemon = ref<Pokemon | null>(null);
const loading = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await response.json();
    pokemons.value = data.results;
  } catch (error) {
    console.error('Failed to fetch Pokémon data:', error);
  }
});


</script>

<template>
  <div class="container">
    
    <h1>Graphs (Undone)</h1>
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6">

        <PokemonDetailsCard
          :pokemon="selectedPokemon"
          :loading="loading"
        />

      </div>


    </div>

  </div>
</template>

<style scoped>

</style>
