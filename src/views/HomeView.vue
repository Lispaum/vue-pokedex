<script setup lang="ts">

import { ref, onMounted, computed } from 'vue';
import ListPokemons from "../components/ListPokemons.vue";
import PokemonDetailsCard from "../components/PokemonDetailsCard.vue";

type PokemonLink = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  type: String,
  hp: number;
  height: number;
  weight: number;
  base_experience: number;
  front_default: string;

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

const pokemonsFiltered = computed(() => {
  if (searchPokemonField.value) {
    const searchValue = searchPokemonField.value.toLowerCase();
    return pokemons.value.filter(pokemon => pokemon.name.includes(searchValue));
  }
  return pokemons.value;
});

const viewPokemon = async (pokemon: PokemonLink) => {

  try {
    loading.value = true;
    const response = await fetch(pokemon.url);

    const { name, base_experience, height, stats, sprites:{ front_default}, types, weight } = await response.json();

    const hp: number = stats[0].base_stat
    const type: string = types[0].type.name

    console.log(type)
    selectedPokemon.value = {
      name,
      base_experience,
      hp,
      height,
      weight,
      front_default,
      type
    } as Pokemon;

    loading.value = false;
  } catch (error) {
    console.error('Failed to fetch Pokémon data:', error);
  }
};

</script>

<template>
  <div class="container">
    
    <h1>Home</h1>
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6">

        <PokemonDetailsCard
          :pokemon="selectedPokemon"
          :loading="loading"
        />

      </div>

      <div class="col-sm-12 col-md-6">
        <div class="card card-list">
          <div class="card-body row">
            <div class="mb-3">
              <label hidden for="searchPokemonField" class="form-label">Pesquisas pokemon...</label>
              <input v-model="searchPokemonField" type="text" class="form-control" id="searchPokemonField" placeholder="ditto">
            </div>

            <ListPokemons
              v-for="pokemon in pokemonsFiltered"
              :key="pokemon.name"
              :name="pokemon.name"
              :imageURL="`${baseImageURL}${pokemon.url.split('/')[6]}.png`"
              @click="viewPokemon(pokemon)"
            />

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.card-list {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 75vh;
}

@media (max-width: 768px) {
  .card-list {
    max-height: 50vh;
  }
}
</style>
