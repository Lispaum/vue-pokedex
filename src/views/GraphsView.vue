
<script setup lang="ts">

import ListPokemons from "../components/ListPokemons.vue"
import PokemonDetailsCard from "../components/PokemonDetailsCard.vue"


import { ref, onMounted, computed, reactive } from 'vue';

type Pokemon = {
  name: string;
  url: string;
};

const pokemons = ref<Pokemon[]>([]);
const baseImageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
let searchPokemonField = ref("")
let selectedPokemon = reactive(ref())
let loading = ref(false)

// Fetch Pokémon data
onMounted(async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await response.json();
    pokemons.value = data.results;
  } catch (error) {
    console.error('Failed to fetch Pokémon data:', error);
  }
});

const pokemonsFiltered = computed( () => {

  let pokemonsFiltered = pokemons.value

  if(pokemons.value && searchPokemonField.value){
    pokemonsFiltered = pokemons.value.filter( pokemon => pokemon.name.includes(searchPokemonField.value.toLowerCase()) )

  }

  return pokemonsFiltered

})

const viewPokemon = async (pokemon: Pokemon) => {
  try {
    loading.value = true;
    const response = await fetch(pokemon.url);
    const data = await response.json();
    selectedPokemon.value = data;
    loading.value = false;
  } catch (error) {
    console.error('Failed to fetch Pokémon data:', error);
  }
  
console.log(selectedPokemon.value)
}

</script>


<template>
  <div class="container">


    <h1>Home</h1>
    
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6">

        <PokemonDetailsCard
        :name="selectedPokemon?.name"
        :xp="selectedPokemon?.base_experience"
        :height="selectedPokemon?.height"
        :img="selectedPokemon?.sprites.front_default"
        :loading="loading"

        />
      </div>
      




      <div class="col-sm-12 col-md-6">
        <div class="card card-list" >
          
          <div class="card-body row">
            <div class="mb-3">
              <label hidden for="searchPokemonField" class="form-label">Pesquisas pokemon...</label>
              <input 
              v-model="searchPokemonField"
              type="text" class="form-control" id="searchPokemonField" placeholder="ditto">
            </div>


            <ListPokemons
            v-for="pokemon in pokemonsFiltered"
            :key="pokemon.name"
            :name="pokemon.name"
            :imageURL="baseImageURL + pokemon.url.split('/')[6] + '.png' "
            @click="viewPokemon(pokemon)"
            />
            
          </div>

        </div>
      </div>


    </div>


  </div>
</template>

<style scoped>

.card-list{
  overflow-x: hidden;

  overflow-y: scroll;
  max-height: 70vh;
}

</style>
