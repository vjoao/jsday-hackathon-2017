<template>
  <div class="navigation">
    <div class="logo">
            <router-link to="/"><img src="../assets/logo.png"/></router-link>
    </div>

    <!-- Navigation component -->
    <nav class="menu">
            <router-link tag="md-button" to="/professores">Professores</router-link>
            <router-link tag="md-button" to="/orfanatos">Orfanatos</router-link>
            <router-link v-if="!user" tag="md-button" to="/login">Login</router-link>
						<md-button v-else @click.native="logout">Logout</md-button>

            <!-- Orphanage
            <router-link tag="md-button" to="/turmas/create">Cadastrar turma</router-link>
            <router-link tag="md-button" to="/turmas">Minhas turmas</router-link>
            <router-link tag="md-button" to="/professor/convites">Convites</roter-link>
            <router-link tag="md-button" to="/turmas">Perfil</router-link>
            -->

            <!-- Teacher
            <router-link tag="md-button" to="/orfanatos">Orfanatos</router-link>
            <router-link tag="md-button" to="/professor/minhas_turmas">Minhas turmas</router-link>
            <router-link tag="md-button" to="/professor/convites">Convites</roter-link>
            <router-link tag="md-button" to="/turmas">Perfil</router-link>
            -->
    </nav>
  </div>
</template>


<script>

import db from '../db';
import firebase from 'firebase';

export default {
    data () {
      return {
        user: {}
      }
    },
		methods: {
			logout () {
				firebase.auth().signOut();
			}
		},
		created() {
      if(firebase.auth().currentUser)
			  this.$bindAsObject('user', db.ref('/users/' + firebase.auth().currentUser.uid))
		}
}
</script>


<style scoped>
.navigation {
	margin: 35px 0;
}

.logo {
	max-width: 220px;
}

.menu {
	float: right;
}

.logo,
.menu {
	display: inline-block;
	vertical-align: text-top;
}

.menu a {
	margin-left: 25px;
	color: #ffffff;
}

.md-button {
  color: #747474!important;
}

</style>