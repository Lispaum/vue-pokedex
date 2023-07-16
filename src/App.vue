<script setup lang="ts">

import HomeView from './views/HomeView.vue'

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    

    <router-link class="navbar-brand" to="/">Vue Pokedex</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link class="nav-link " aria-current="page" to="/">Search</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " aria-current="page" to="/graphs">Graphs</router-link>
        </li>
      

      </ul>
 
    </div>
  </div>
</nav>


  <HomeView />

  <!-- CONTENT -->

  <div class="main">
    <router-view>
      
    </router-view>
  </div>


</template>

<style scoped>

</style>
