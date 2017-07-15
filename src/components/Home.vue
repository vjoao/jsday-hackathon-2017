<template>
	<div class="container">
		<!-- navigation -->
		<Navigation />
	
		<div class="intro-message">
			<p class="search-message">Buscar
				<span class="blue">professores</span>
			</p>
			<p class="find-new-teacher">Encontre os melhores professores para seus alunos</p>
		</div>
	
		<div class="search-form-home">
			<input type="text" class="search-home" name="search" placeholder="Digite uma matéria" />
		</div>
	
		<md-layout md-row>
			<md-layout md-flex="25" class="cards-teacher" v-for="professor in professors">
				<md-card>
					<md-card-header>
						<div class="md-title">{{ professor.name }}</div>
						<div class="md-subhead">Matemática, Física, Química</div>
					</md-card-header>
	
					<md-card-expand>
						<md-card-actions>
							<router-link tag="md-button" :to="{ name: 'ProfessorPerfil', params: { id: professor['.key'] }}">Ver Perfil</router-link>
							<md-button>Chat</md-button>
							<span style="flex: 1"></span>
							<md-button class="md-icon-button" md-expand-trigger>
								<md-icon>keyboard_arrow_down</md-icon>
							</md-button>
						</md-card-actions>
	
						<md-card-content>
							<p>Contato: {{ professor.phone }}</p>
							<p>Redes sociais:
								<a href="#">Twitter</a>,
								<a href="#">Facebook</a>
							</p>
						</md-card-content>
					</md-card-expand>
				</md-card>
			</md-layout>
	
		</md-layout>
	</div>
</template>

<script>
import firebase from 'firebase'
import db from '../db';
import Navigation from './Navigation.vue'

export default {
	components: {
		Navigation
	},
	firebase: {
		professors: {
			source: db.ref('/professors')
		}
	}
}
</script>

<style>
.cards-teacher {
	margin-bottom: 30px;
}
</style>