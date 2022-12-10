<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { MusicStore } from '@/stores/counterMusic'


const { newMusic } = storeToRefs(MusicStore())

</script>

// playermusic Part

<template>

    <section class="fixed bottom-5  w-full flex justify-center pt-2">

        <audio class="py-1 w-3/6" :src="newMusic.value" controls autoplay>
        </audio>

    </section>

</template>