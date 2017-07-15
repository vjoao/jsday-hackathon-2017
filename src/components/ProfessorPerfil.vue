<template>
    <div class="container">
        <Navigation></Navigation>
        
        <h1 class="teacher-name">{{professor.name }} </h1>
        <div class="phone-viewport">
            <md-list class="md-double-line">
                <md-list-item>
                    <md-icon class="md-primary">phone</md-icon>

                    <div class="md-list-text-container">
                        <span>(75) 9999-9999</span>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                        <md-icon>sms</md-icon>
                    </md-button>
                </md-list-item>

                <md-list-item>
                    <md-icon class="md-primary">email</md-icon>

                    <div class="md-list-text-container">
                        <a href="mailto:aliconnors@example.com">aliconnors@example.com</a>
                        <span>Personal</span>
                    </div>
                </md-list-item>

                <md-list-item>
                    <md-icon class="md-primary">assignment</md-icon>

                    <div class="md-list-text-container">
                        <span>Disciplinas</span>
                        <span> {{ subjects(professor) }} </span>
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
    import db from '../db';

    export default {
       
        components: {
            Navigation
        },
        firebase() {
            return {
                professor: {
                    source: db.ref('/professors/' + this.$route.params.id),
                    asObject: true
                }
            }
        },
        methods: {
            subjects (professor) {
                return professor.subjects.reduce( (current, subject) => {
                    if(!current)
                        return subject.name;
                    
                    return current + ', ' + subject.name;
                 }, '');                
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