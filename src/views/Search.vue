<script setup lang="ts">

import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { search } from '@/api/spotify';


const route = useRoute()
const response = ref([])
const query = ref(route.query.query as string ?? '')
let regex = /(?<year>\d{4})(?<month>-\d{2})(?<day>-\d{2})/

async function init() {

  response.value = await search(query.value, 'album')
}

if(query.value.length > 0) {
  init()
} 

</script>

<template>

  <div class="px-16 pt-8 pb-18 bg-stone-900 w-full">  
  
    <form class=" bg-stone-900" action="/search" method="get">   
      <label  for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input v-model="query"  name="query"  type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-600 focus:border-green-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Music, Album..." required>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-800 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>
    
    <div class="pl-8">
    <ul v-if="response != 0" class="flex flex-wrap gap-12 pb-12  ">
      <li v-for="album in response.albums.items" :key="album">
        <router-link :to="`/albums/?query=${album.id}`" class="bg-slate-700  flex flex-col justify-center rounded-lg mt-12 ml-4 h-96">
          <div :style="{backgroundImage: `url(${album.images[0].url})`}" class="bg-no-repeat bg-cover self-center images"></div> 
          <h2 class="text-white text-xl font-bold self-center mt-2 text-center">{{ album.name }}</h2>
          <h3 class="text-white self-center flex flex-row">
            <span v-for="date in regex.exec(album.release_date)?.slice(1, 3) "> <br>{{ date }}</span>  
          </h3>

        </router-link>
      </li>
    </ul>
  </div> 
</div>

</template>



