<script setup>
import NavBar from './components/NavBar.vue';
import Intro from './components/Intro.vue';
</script>

<template>
  <header>
    <NavBar />
    <Intro />
    <RouterView />
  </header>



  <footer class="font-ibm object-bottom text-center py-2 bg-beige text-black-olive fixed bottom-0 w-screen">
    Built with Vue and Tailwind
  </footer>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');
</style>