<template>
    <md-layout md-row md-align="center">
        <md-layout md-flex="33" md-align="center">
            
            <img src="../assets/logo.png"/>

            <md-input-container>
                <label>Email</label>
                <md-input v-model="username"></md-input>
            </md-input-container>

            <md-input-container md-has-password>
                <label>Senha</label>
                <md-input type="password"></md-input>
            </md-input-container>
            <md-button class="md-primary"> Teste </md-button>
        </md-layout>
    </md-layout>
</template>

<style>
    md-layout {
        background: red;
    }
</style>

<script>
    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            submit () {
                console.log('submit')
            }            
        }
    }
</script>