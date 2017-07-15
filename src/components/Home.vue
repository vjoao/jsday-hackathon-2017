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
			<input v-model="search" type="text" class="search-home" name="search" placeholder="Digite uma matéria" />
		</div>
	
		<md-layout md-row>
			<md-layout md-flex="25" class="cards-teacher" v-for="professor in filteredProfessors">
				<md-card>
					<md-card-header>
						<div class="md-title">{{ professor.name }}</div>
						<div class="md-subhead">{{ subjects(professor) }}</div>
					</md-card-header>
	
					<md-card-expand>
						<md-card-actions>
							<router-link tag="md-button" :to="{ name: 'ProfessorPerfil', params: { id: professor['.key'] }}">Ver Perfil</router-link>
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
			<p v-if="filteredProfessors.length === 0" class="find-new-teacher">Nada encontrado</p>
		</md-layout>
	</div>
</template>

<script>
import firebase from 'firebase'
import db from '../db';
import Navigation from './Navigation.vue'
import Fuse from 'fuse.js';

export default {
	data () {
		return {
			search: '',
			fuse: {}
		}
	},
	components: {
		Navigation
	},
	asyncComputed: {
		filteredProfessors () {
			const options = {
				shouldSort: true,
				threshold: 0.3,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 3,
				keys: [
					"name",
					"subjects.name"
				]
			};


			const fuse = new Fuse(this.professors, options);

			if(this.search)
				return fuse.search(this.search);
			return this.professors;
		}
	},
	firebase: {
		professors: {
			source: db.ref('/professors')
		}
	},
	methods: {
		subjects (professor) {
			return professor.subjects.reduce( (current, subject) => {
				if(!current)
					return subject.name;
				
				return current + ', ' + subject.name;
				}, '');                
		}
	}
	
}
</script>

<style>
.cards-teacher {
	margin-bottom: 30px;
}
</style>