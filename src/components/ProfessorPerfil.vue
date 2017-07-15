<template>
    <div class="container">
        <Navigation></Navigation>

        <md-layout md-gutter>
        <md-layout md-column md-gutter>
            <md-layout md-flex="20"></md-layout>
            <md-layout></md-layout>
        </md-layout>

        <md-layout md-column md-gutter>
            <md-layout md-flex="50"></md-layout>
            <md-layout></md-layout>
            <md-layout></md-layout>
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