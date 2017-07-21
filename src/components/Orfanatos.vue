<template>
    <div class="container">
        <Navigation></Navigation>
        <div class="intro-message">
          <p class="search-message">Buscar <span class="blue">orfanatos</span></p>
          <p class="find-new-teacher">Encontre orfanatos para ajudar</p>
        </div>

        <div class="search-form-home">
            <input v-model="search" type="text" class="search-home" name="search" placeholder="Digite o nome do orfanato"/>
        </div>
		<md-layout md-row>
			<md-layout md-flex="25" class="cards-teacher" v-for="orphanage in filteredOrphanages">
				<md-card>
					<md-card-header>
						<div class="md-title">{{ orphanage.name }}</div>
						<div class="md-subhead">Cidade Nova - Feira de Santana</div>
					</md-card-header>

					<md-card-expand>
						<md-card-actions>
							<router-link :to="{ name: 'OrfanatosPerfil', params: { id: orphanage['.key'] }}">Ver Perfil</router-link>
							<span style="flex: 1"></span>
							<md-button class="md-icon-button" md-expand-trigger>
								<md-icon>keyboard_arrow_down</md-icon>
							</md-button>
						</md-card-actions>

						<md-card-content>
							<p>Contato: 75 9 9999-0000</p>
							<p>Redes sociais: <a href="#">Twitter</a>, <a href="#">Facebook</a></p>
						</md-card-content>
					</md-card-expand>
				</md-card>
			</md-layout>

			<md-layout md-flex="100" class="cards-teacher">
				<div class="google-maps">
					<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=Feira%20de%20santana&key=AIzaSyAn6hDp2AFKwMRYOAO9ptRqOQcbUwbEs4k" allowfullscreen></iframe>
				</div>
			</md-layout>


		</md-layout>

						<md-card-content>
							<p>Responsável: Pedro Mota</p>
							<p>Alunos: 35</p>
							<p>Média de idade: 14 anos</p>
						</md-card-content>
					</md-card-expand>
				</md-card>
			</md-layout>
			<p v-if="filteredOrphanages.length === 0" class="find-new-teacher">Nada encontrado</p>
		</md-layout>
    </div>
</template>

<script>
    import Navigation from './Navigation.vue'
	import db from '../db';
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
			filteredOrphanages () {
				const options = {
					shouldSort: true,
					threshold: 0.3,
					location: 0,
					distance: 100,
					maxPatternLength: 32,
					minMatchCharLength: 3,
					keys: [
						"name"
					]
				};

				const fuse = new Fuse(this.orphanages, options);

				if(this.search)
					return fuse.search(this.search);
				return this.orphanages;
			}
		},
		firebase: {
			orphanages: {
				source: db.ref('/orphanages')
			}
		}
    }
</script>

<style>
    .google-maps {
        position: relative;
        padding-bottom: 75%; // This is the aspect ratio
        height: 0;
        overflow: hidden;
		width: 100%;
    }
    .google-maps iframe {
        position: absolute;
        width: 100% !important;
        height: 480px !important;
    }
</style>