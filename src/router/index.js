import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import firebase from 'firebase';
import ProfessorPerfil from '@/components/ProfessorPerfil'
import Orfanatos from '@/components/Orfanatos'


Vue.use(Router)

const router = new Router({
  mode: 'history',
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
