import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Callback from '../views/Callback.vue'
import Album from '../views/Album.vue'
import Artist from '../views/Artist.vue'
import Search from '../views/Search.vue'
import Accueil from '../views/Accueil.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },

    {
      path: '/artist',
      name: 'artist',
      component: Artist
    },
    
    {
      path: '/albums',
      name: 'albums',
      component: Album
    },

    {
      path: '/search',
      name: 'search',
      component: Search
    }
   
  ]
})

export default router
