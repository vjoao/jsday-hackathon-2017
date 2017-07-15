<template>
  <div class="navigation">
    <div class="logo">
            <router-link to="/"><img src="../assets/logo.png"/></router-link>
    </div>

    <!-- Navigation component -->
    <nav class="menu">
            <router-link tag="md-button" to="/">Professores</router-link>
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
  </div>
</template>

<style>
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
</style>