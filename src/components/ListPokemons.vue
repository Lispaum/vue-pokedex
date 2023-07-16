<script setup lang="ts" >
const pokemon = defineProps({
    name: String,
    imageURL: String
})

</script>

<template>
<div class="col-4 col-md-6 col-lg-3">
    <div class="card mb-2 cardList">
        <p class="text-center">{{ pokemon.name }} </p>
        <img :src="imageURL"
         class="card-img-top" alt="...">

    </div>
</div>

</template>

<style scoped>

p{
    text-transform: capitalize;
}

.cardList{
    background: rgb(72, 62, 251);
    background: radial-gradient(circle, rgba(72, 63, 251, 0.5) 0%, rgba(70, 252, 251, 0.5) 100%);
    cursor: pointer;

}

.cardList:hover{
    background: radial-gradient(circle, rgba(72, 63, 251, 0.7) 0%, rgba(70, 252, 251, 0.7) 100%);

}

.cardList img:hover{
    padding: .1rem;
}

</style>