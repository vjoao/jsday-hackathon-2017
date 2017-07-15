import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
<<<<<<< HEAD
import firebase from 'firebase';
=======
import ProfessorPerfil from '@/components/ProfessorPerfil'
import Orfanatos from '@/components/Orfanatos'

>>>>>>> 2b908b8b7f19595d10a4a74f948842bc3787d0c5

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/orfanatos',
      name: 'Orfanatos',
      component: Orfanatos
    },
    {
      path: '/professor/:id',
      name: 'ProfessorPerfil',
      component: ProfessorPerfil
    }
  ]


// Como você trabalha com o ensino de programação para meninas ?

})

export default router
