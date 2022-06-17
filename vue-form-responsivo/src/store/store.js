import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        form: {
            fullname: '',
            nickname: '',
            email: '',
            phone: '',
            day: '',
            month: '',
            year: '',
            term: false,
            linkedin: '',
            github: '',
            institution: '',
            graduation: '',
            certificate: ''
        }
    },
    getters:{
        fullname(state){
             return state.form.fullname
        },
        nickname(state){
             return state.form.nickname
        },
        email(state){
             return state.form.email
        },
        phone(state){
             return state.form.phone
        },
        day(state){
             return state.form.day
        },
        month(state){
             return state.form.month
        },
        year(state){
             return state.form.year
        },
        linkedin(state){
             return state.form.linkedin
        },
        github(state){
             return state.form.github
        },
        institution(state){
             return state.form.institution
        },
        graduation(state){
             return state.form.graduation
        },
        certificate(state){
             return state.form.certificate
        },
        birthday(state){
             return state.form.day + '/' + state.form.month + '/' + state.form.year 
        },
    },
    mutations: {
        setFullname(state, payload) {
            state.form.fullname = payload
        },
        setNickname(state, payload) {
            state.form.nickname = payload
        },
        setEmail(state, payload) {
            state.form.email = payload
        },
        setPhone(state, payload) {
            state.form.phone = payload
        },
        setDay(state, payload) {
            state.form.day = payload
        },
        setMonth(state, payload) {
            state.form.month = payload
        },
        setYear(state, payload) {
            state.form.year = payload
        },
        setTerm(state, payload) {
            state.form.term = payload
        },
        setLinkedin(state, payload) {
            state.form.linkedin = payload
        },
        setGithub(state, payload) {
            state.form.github = payload
        },
        setInstitution(state, payload) {
            state.form.institution = payload
        },
        setGraduation(state, payload) {
            state.form.graduation = payload
        },
        setCertificate(state, payload) {
            state.form.certificate = payload
        },
    },
    actions:{
        changeFullname(context, payload){
            context.commit('setFullname', payload)
        },
        changeNickname(context, payload){
            context.commit('setNickname', payload)
        },
        changeEmail(context, payload) {
            context.commit('setEmail', payload)
        },
        changePhone(context, payload) {
            context.commit('setPhone', payload)
        },
        changeDay(context, payload) {
            context.commit('setDay', payload)
        },
        changeMonth(context, payload) {
            context.commit('setMonth', payload)
        },
        changeYear(context, payload) {
            context.commit('setYear', payload)
        },
        changeTerm(context, payload) {
            context.commit('setTerm', payload)
        },
        changeLinkedin(context, payload) {
            context.commit('setLinkedin', payload)
        },
        changeGithub(context, payload) {
            context.commit('setGithub', payload)
        },
        changeInstitution(context, payload) {
            context.commit('setInstitution', payload)
        },
        changeGraduation(context, payload) {
            context.commit('setGraduation', payload)
        },
        changeCertificate(context, payload) {
            context.commit('setCertificate', payload)
        }
    }
})