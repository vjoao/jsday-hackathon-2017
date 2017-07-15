<template>
	<div class="container">
			<div class="navigation">
					<div class="logo">
							<router-link to="/"><img src="../assets/logo.png"/></router-link>
					</div>

					<!-- Navigation component -->
					<nav class="menu">
							<router-link tag="md-button" to="/professores">Professores</router-link>
							<router-link tag="md-button" to="/orfanatos">Orfanatos</router-link>
							<router-link tag="md-button" to="/login">Login</router-link>

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

					<div class="intro-message">
							<p class="search-message">Buscar <span class="blue">professores</span></p>
							<p class="find-new-teacher">Encontre os melhores professores para seus alunos</p>
					</div>

					<div class="search-form-home">
						<input type="text" class="search-home" name="search" placeholder="Digite uma matéria"/>
					</div>

			</div>
	</div>
</template>

<script>

</script>

<style>
.intro-message {
	margin: 80px 0 20px 0;
}

.intro-message .search-message {
	font-size: 36px;
	color: #979797;
	margin: 25px 0;
}

.intro-message .find-new-teacher {
	font-size: 20px;
	color: #979797;
}

.search-home {
	width: 100%;
	padding: 20px;
	border-radius: 5px;
	border: 1px solid #d4d4d4;
	outline: none;
	margin: 10px 0;
	font-size: 18px;
	color: #616161;
}
</style>