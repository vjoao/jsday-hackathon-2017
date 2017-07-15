<template>
    <div class="container">
        <Navigation></Navigation>
        
        <h1 class="teacher-name">{{ orphanage.name }}</h1>
        <div class="phone-viewport">
            <md-list class="md-double-line">
                <md-list-item>
                    <md-icon class="md-primary">phone</md-icon>

                    <div class="md-list-text-container">
                        <span>(650) 555-1234</span>
                        <span>Mobile</span>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                        <md-icon>sms</md-icon>
                    </md-button>
                </md-list-item>

                <md-list-item>
                    <md-icon class="md-primary">email</md-icon>

                    <div class="md-list-text-container">
                        <a href="mailto:vo_filo@gmail.com">vo_filo@gmail.com</a>
                        <span>Personal</span>
                    </div>
                </md-list-item>

                <md-list-item>
                    <md-icon class="md-primary">assignment</md-icon>

                    <div class="md-list-text-container">
                        <span>Disciplinas desejadas</span>
                        <span>Matemática, Física, Química</span>
                    </div>
                </md-list-item>

                <md-list-item>
                    <md-icon class="md-primary">perm_contact_calendar</md-icon>

                    <div class="md-list-text-container">
                        <span>Dias livres</span>
                        <span>Segunda, Terça (8:30-10:30), Sexta, Sábado</span>
                    </div>
                </md-list-item>
            </md-list>
        </div>

    </div>
</template>

<script>
    import Navigation from './Navigation.vue'

    export default {
        components: {
            Navigation
        },
        firebase() {
            return {
                orphanage: {
                    source: db.ref('/orphanages/' + this.$route.params.id),
                    asObject: true
                }
            }
        }
    }
</script>

<style scoped>
    .teacher-name {
        color: #747474;
        font-weight: normal;
    }
</style>