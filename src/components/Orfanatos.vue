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
</style>