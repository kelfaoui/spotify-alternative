<script setup lang="ts">

import { initCustomFormatter, ref } from 'vue';
import { useRoute } from 'vue-router';
import { findAlbum } from '@/api/spotify';
import { MusicStore } from '@/stores/counterMusic';



const response = ref([])
const route = useRoute()
const query = ref(route.query.query as string ?? '')
const store = MusicStore()
const { musicCop, newMusic, addMusic} = store

async function init() {
  response.value = await findAlbum(query.value)
  console.log(response.value)
}


async function addNewMusic(music:string){
    addMusic(music)
    console.log(newMusic.value)
}

if(query.value.length > 0){
    init()
}



</script>



<template>

    <section class="flex flex-row gap-12 p-4 bg-gradient-to-b from-stone-600 to-stone-800 mt-2">
        <div v-for="image in response.images?.slice(0,1)" :key="image">
            <div :style="{backgroundImage: `url(${image.url})`}" class="image bg-no-repeat bg-cover self-center "></div> 
        </div>
        <div class="flex flex-col justify-end gap-4">
            <h4 class="text-white text-4xl uppercase">{{ response.album_type }}</h4>
            <h2 class="text-white text-6xl font-bold">{{ response.name }}</h2>
           <div class="flex mt-4">
                        <img :src="response.images[0].url" alt="" class="h-6 w-6 rounded-full mr-2">
                        <p class="text-white text-xl font-bold">{{ response.artists[0].name }}</p>
                        <p class="text-white text-xl font-bold"> &nbsp;&nbsp; - &nbsp; {{ response.total_tracks }} Lyrics</p>
                    </div>
        </div>
    </section>

    <div class="p-8 mb-22">
        <ul>
            <li v-for="track in response.tracks.items" :key="track"  @click="addNewMusic(track.preview_url)" class="flex flex-row items-center justify-between hover:bg-stone-700 transition p-4 rounded">
                <div class="flex flex-row items-center gap-12">
                    <h4 class="text-white text-xl font-bold">{{ track.track_number }}</h4>
                    <div class="flex flex-col self-start">
                        <h2 class="text-white text-lg font-bold">{{ track.name }}</h2>
                        <ul class="flex flex-row gap-4 px-3 ">
                            <li v-for="artist in track.artists">
                                <a :href="`/artist/?query=${artist.id}`" class="text-green-800 text-xl underline hover:text-green-400 hover:font-bold">
                                    {{ artist.name}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h4 class="text-white text-lg">{{ Math.floor((track.duration_ms/1000/60) << 0)}}:{{ Math.floor((track.duration_ms/1000) % 60)}}</h4>
            </li>
        </ul>
    </div>
</template>


