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

.md-button {
  color: #747474!important;
}

.blue{
	color:  #4A90E2;
}

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
	margin: 10px 0 30px 0;
	font-size: 18px;
	color: #616161;
}

</style>
