<script setup lang="ts">

import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { profil } from '@/api/spotify';


const response = ref([])
const route = useRoute()


async function init(){
    response.value = await profil()
}


init()

</script>

//Header Part (to Login)

<template>
    <header class="flex flex-row justify-between gap-y-24 px-6 py-3 bg-neutral-800 items-center ">
       <a href="/"> <img  src="../../public/img/Spotify_Logo_Green.png" alt="logo-spotify" srcset="" class="rounded-full h-16 w-17 mr-2"></a>

        
        <a href="/login" class="flex flex-row items-center gap-4 slef-center bg-green-500 p-3 rounded hover:bg-pink-800 ">
            <ul v-if="response.length != 0" class="flex flex-row items-center gap-4 slef-center">
                <h4 class="text-stone-800  font-bold text-xl">{{ response.display_name}}</h4>
                <li v-for="image in response.images" :key="image">
                    <div :style="{backgroundImage: `url(${image.url})`}" class="bg-cover bg-no-repeat images"></div>
                </li>
            </ul> 
            <h4 v-else class="text-stone-800 font-bold text-1xl">Connexion</h4>
        </a>
    </header>

    
</template>


