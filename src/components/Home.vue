<script lang="ts">

export default {
  name: 'App',
  data: function() {
    return {
      props: {
        icon: String
      },
   
   
      showDropdown : false,

      recents: [
        {src: '../public/img/album10.png', title: 'Daily Mix 2', artist: 'By Spotify'},
        {src: '../public/img/album2.png', title: 'Daily Mix 3', artist: 'Billie Eilish'},
        {src: '../public/img/album3.png', title: 'Billie Eilish Radio', artist: 'Cold Case Files'},
        {src: '../public/img/album4.png', title: 'Cold Case Files', artist: 'PodcastOne'},
        {src: '../public/img/album5.png', title: 'Life Is Good Radio', artist: 'By Spotify'},
        {src: '../public/img/album1.png', title: 'Life Is Good Radio', artist: 'By Spotify'},
      ],
      customs: [
        {src: '../public/img/album2.png', title: 'Daily Mix 2', artist: 'By Spotify'},
        {src: '../public/img/album6.png', title: 'Daily Mix 3', artist: 'By Spotify'},
        {src: '../public/img/album7.png', title: 'Billie Eilish Radio', artist: 'Billie Eilish'},
        {src: '../public/img/album8.png', title: 'Cold Case Files', artist: 'PodcastOne'},
        {src: '../public/img/album9.png', title: 'Life Is Good Radio', artist: 'By Spotify'},
        {src: '../public/img/album10.png', title: 'Life Is Good Radio', artist: 'By Spotify'},

      ]
    }
  }
}


</script>

<template class="">
   

      <div id="scroll" class="w-full h-screen relative">
         
         <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-black">
          <div class="flex items-center">
            


        <!-- partie centrale -->
        <div class="p-6  py-10 mb-2 bg-black">
        <div class=" flex items-center justify-between">
          <h1 class="pl-2 text-2xl pb-3 font-semibold text-zinc-50 tracking wider hover:underline">Recently Played</h1>
        </div>   
           <div class="w-full flex flex-wrap">    
            <div v-for="recent in recents" class="p-2 w-48 ">
              <div class="bg-zinc-800 w-full h-auto p-5 rounded-lg shadow-md opacity-70 hover:opacity-100 transition-all">
                <img :src="`${ recent.src }`" alt="" srcset="" class="h-auto w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-zinc-50 tracking wide"> {{ recent.title }} </h1>
                <h2 class="text-xs text-zinc-500 tracking-wide pb-5"> {{ recent.artist }} </h2>
              </div>
              
            </div>
          </div> 
        </div>
        <div class="p-6 py-3">
        <div class="pl-2">
          <h1 class="pl-2 text-2xl font-semibold pb-3 text-zinc-50 tracking wider hover:underline">Made for Chabane KELFAOUI</h1>
          <h2 class="text-sm text-zinc-500 ">Get better recommendations the more you listen.</h2>
        </div>  
          <div class="w-full flex flex-wrap">    
            <div v-for="custom in customs" class="p-2 w-48 ">
              <div class="bg-zinc-800 w-full h-auto p-5 rounded-lg shadow-md opacity-70 hover:opacity-100 transition-all">
                <img :src="`${ custom.src }`" alt="" srcset="" class="h-auto w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-zinc-50 tracking wide"> {{ custom.title }} </h1>
                <h2 class="text-xs text-zinc-500 tracking-wide pb-5"> {{ custom.artist }} </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    

      
  </div>

  
</template>

