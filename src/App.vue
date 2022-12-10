<script setup lang="ts">

import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Player from '@/components/Player.vue';

</script>

<template>

    <main class=" bg-stone-900 w-full">
      <Header />
      <RouterView/>
      <Player />
    </main>
  
</template>


