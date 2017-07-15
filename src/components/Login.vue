<template>
    <md-layout md-row md-align="center" class="login-top">
        <md-layout md-flex="33" md-align="center">
            <img src="../assets/logo.png"/>

            <md-input-container :class="{ 'md-input-invalid' : hasErrors }">
                <label>Email</label>
                <md-input v-model="email" v-on:input.native="hasErrors = false"></md-input>
            </md-input-container>

            <md-input-container md-has-password :class="{ 'md-input-invalid' : hasErrors }">
                <label>Senha</label>
                <md-input v-model="password" v-on:input.native="hasErrors = false" type="password"></md-input>
            </md-input-container>

            <md-button class="md-raised md-primary" @click.native="login"> Entrar </md-button>
            <md-button class="md-primary" @click.native="login"> Esqueci minha senha </md-button>
        </md-layout>
    </md-layout>
</template>

<style>
    md-layout {
        background: red;
    }
    .login-top {
        margin-top: 80px;
    }
</style>

<script>
    import firebase from 'firebase';

    export default {
        data () {
            return {
                email: '',
                password: '',
                hasErrors: false
            }
        },
        methods: {
            login () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then().catch( err => {
                    this.hasErrors = true
                });
            }            
        }
    }
</script>