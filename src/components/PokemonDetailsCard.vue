<script setup lang="ts">

import { Pokemon } from '../views/HomeView.vue';

const {pokemon, loading} = defineProps<{
    pokemon: Pokemon,
    loading: Boolean
}>()

</script>


<template>
    
    <div 
    class="card details-card"
    :class="loading ? '' : 'animate__animated animate__flipInY'">

        <img 
        v-if="pokemon?.name"

        :src="pokemon.front_default"
        class="card-img-top pt-2"
        :alt="pokemon.name"
        >

        <img 
        v-else
        src="../assets/egg_pokemon.svg"
        class="card-img-top pt-2"
        alt="??"
        >

        <div class="card-body">
            <h5 class="card-title text-center">{{ pokemon?.name ?? '???' }}</h5>
            <h5 class="card-title text-center">{{ pokemon?.type ?? '???' }}</h5>
            <hr>

        <div class="row">
            <section class="col">
                <strong>Height: </strong>
                <span>{{ pokemon?.height }}</span>

            </section>

            <section class="col">
                <strong>Weight: </strong>
                <span>{{ pokemon?.weight}}</span>

            </section>

        </div>   
        <div class="row">
            <section class="col">
                <strong>XP: </strong>
                <span>{{ pokemon?.base_experience}}</span>

            </section>

            <section class="col">
                <strong>Height: </strong>
                <span>{{ pokemon?.height }}</span>

            </section>
        </div>  
        
        
        </div>
    </div>
  

</template>


<style scoped>

.card-title{
    text-transform: capitalize;
}

.details-card{
    height: 75vh;
    background: rgb(72, 62, 251);
    background: radial-gradient(circle, rgba(72, 63, 251, 0.5) 0%, rgba(70, 252, 251, 0.5) 100%);
    cursor: pointer;
}

.details-card img{
    object-fit: contain;
  width: 100%;
  height: 100%;
}


@media (max-width: 768px){

    .details-card{
        height: 30vh;
        width: 40%;
        margin: 0 auto 10px auto;
    }


    
    
}


</style>