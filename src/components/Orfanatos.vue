<template>
    <div class="container">
        <Navigation></Navigation>
        <div class="intro-message">
          <p class="search-message">Buscar <span class="blue">orfanatos</span></p>
          <p class="find-new-teacher">Encontre orfanatos para ajudar</p>
        </div>

        <div class="search-form-home">
                <input type="text" class="search-home" name="search" placeholder="Digite uma matéria"/>
        </div>
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