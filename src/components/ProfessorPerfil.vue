<template>
    <div class="container">
        <Navigation></Navigation>
        
        <h1 class="teacher-name">John Doe</h1>
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
                        <span>aliconnors@example.com</span>
                        <span>Personal</span>
                    </div>
                </md-list-item>

                <md-list-item>
                    <md-icon class="md-primary">assignment</md-icon>

                    <div class="md-list-text-container">
                        <span>Disciplinas</span>
                        <span>Matemática, Física, Química</span>
                    </div>
                </md-list-item>

                <md-list-item>
                    <md-icon class="md-primary">perm_contact_calendar</md-icon>

                    <div class="md-list-text-container">
                        <span>Dias disponíveis</span>
                        <span>Segunda (10:30-12:30), Terça (8:30-10:30), Sexta (09:30-11:30)</span>
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
        }
    }
</script>

<style scoped>
    .teacher-name {
        color: #747474;
        font-weight: normal;
    }
</style>