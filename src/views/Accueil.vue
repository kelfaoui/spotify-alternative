<script setup lang="ts">

import {  ref } from 'vue';
import { useRoute } from 'vue-router'
import { search } from '@/api/spotify';
import Dar from '@/components/Home.vue';


const route = useRoute()
const response = ref([])
const query = ref(route.query.query as string ?? '')

async function init() {

  response.value = await search(query.value, 'album')
}

if(query.value.length > 0) {
  init()
} 

</script>

<template>
  <div class=" pt-8 pb-18 bg-stone-900 w-full">  
  
      <form class="px-12 bg-stone-900" action="/search" method="get">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input v-model="query"  name="query"  type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-600 focus:border-green-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Music, Album..." required>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:focus:ring-blue-800">Search</button>
        </div>
    </form>
  
     <Dar/>
  </div>
</template>



