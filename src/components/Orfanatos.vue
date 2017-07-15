<template>
    <div class="container">
        <Navigation></Navigation>
        <div class="intro-message">
          <p class="search-message">Buscar <span class="blue">orfanatos</span></p>
          <p class="find-new-teacher">Encontre orfanatos para ajudar</p>
        </div>

        <div class="search-form-home">
            <input type="text" class="search-home" name="search" placeholder="Digite o nome do orfanato"/>
        </div>

		<md-layout md-row>
			<md-layout md-flex="25" class="cards-teacher">
				<md-card>
					<md-card-header>
						<div class="md-title">Orfanato Lorem ipsum</div>
						<div class="md-subhead">Cidade Nova - Feira de Santana</div>
					</md-card-header>

					<md-card-expand>
						<md-card-actions>
							<md-button>Ver Perfil</md-button>
							<md-button>Chat</md-button>
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

    </div>
</template>

<script>
    import Navigation from './Navigation.vue'

    export default {
        components: {
            Navigation
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