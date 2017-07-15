<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.container {
	max-width: 1100px;
	margin: 0 auto;
}

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

.blue{
	color:  #4A90E2;
}

</style>
