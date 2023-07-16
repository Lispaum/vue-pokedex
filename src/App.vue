<script setup lang="ts">

import HomeView from './views/HomeView.vue'

</script>

<template>
  <!-- NAVBAR -->

  <nav class="navbar navbar-expand-lg  bg-primary">
  <div class="container-fluid">
    

    <router-link class="navbar-brand" to="/">
      <img src="https://cdn-icons-png.flaticon.com/512/188/188987.png" alt="pikachu icon" width="30" height="24" class="d-inline-block align-text-top">
      Vue Pokedex
    </router-link>
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



  <!-- FOOTER -->
  <footer class="bg-primary text-light">
    <div>Developed for a Technical Test</div>
    |
    <div>
      <a href="asdasd">
      Github Repository
      </a>
    </div>
  </footer>


</template>

<style scoped>

img{
  object-fit: contain;
}

footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
}


footer div {
  margin: 0 1rem;
}

footer div a {
  text-decoration: initial;
  color: inherit;
  font-weight: inherit;
}

</style>
