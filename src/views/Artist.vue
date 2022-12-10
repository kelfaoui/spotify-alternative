<script setup lang="ts">

import { initCustomFormatter, ref } from 'vue';
import { useRoute } from 'vue-router';
import { findArtist } from '@/api/spotify';
import { findArtistTopTracks } from '@/api/spotify';
import { MusicStore } from '@/stores/counterMusic'


const response = ref([])
const topTracks = ref([])
const route = useRoute()
const query = ref(route.query.query as string ?? '')
const store = MusicStore()
const { musicCop, newMusic, addMusic} = store

async function init() {
  response.value = await findArtist(query.value)
  topTracks.value = await findArtistTopTracks(query.value)
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

        <section :style="{backgroundImage: `url(${response.images[0].url})`}" class="image bg-no-repeat bg-cover bg-center  flex flex-col justify-center items-center p-7 w-full  h-full">
            <div class="flex flex-col">
                <h1 class=" uppercase font-bold text-9xl ">{{ response.name}}</h1>
                <h4 class="text-6xl  self-center text-pink-900 font-extrabold"> {{ response.followers.total }} Followers</h4>
            </div>
        </section>


        <section class="p-8 flex flex-col gap-12  h-full ">
            <h3 class="font-bold text-6xl text-white">Populaire</h3>
            <ul class="flex flex-col">
                <li v-for="(track, item) in topTracks.tracks.slice(0, 20)" :key="track" @click="addNewMusic(track.preview_url)" class="flex flex-row items-center justify-between hover:bg-stone-700 transition p-5 rounded">
                    <div class="flex flex-row items-center gap-9">
                        <h4 class="text-white text-xl  ">{{ item + 1 }}</h4>
                        <div :style="{backgroundImage: `url(${track.album.images[0].url})`}" class="imageAlbum bg-no-repeat bg-cover"></div>
                        <h4 class="text-white text-xl hover:text-pink-900 hover:font-bold "> {{  track.name }}</h4>
                    </div>
                    <h4 class="text-white text-xl ">{{ Math.floor((track.duration_ms/1000/60) << 0) }}:{{Math.floor((track.duration_ms/1000) % 60)}}</h4>
                </li>
            </ul>
        </section>

    


</template>

