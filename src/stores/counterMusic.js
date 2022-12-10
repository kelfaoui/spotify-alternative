import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const MusicStore = defineStore('music', () =>{
    const musicCop = ref(null)

    const newMusic = computed(()=>musicCop)

    function addMusic(music){
        musicCop.value = music
    }

    return {musicCop, addMusic, newMusic}
})

