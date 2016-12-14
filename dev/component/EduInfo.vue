<template lang="html">
    <div class="edu-info">
        <h1>Education Background</h1>

        <input
            type="date"
            name="educateFrom"
            v-model="educateFrom">

            <input
                type="date"
                name="educateTo"
                v-model="educateTo">

            <input
                type="text"
                name="school"
                placeholder="school"
                v-model="school">

            <input
                type="text"
                name="major"
                placeholder="major"
                v-model="major">

            <input
                type="text"
                name="diploma"
                placeholder="diploma"
                v-model="diploma">

            <input
                type="text"
                name="english"
                placeholder="english"
                v-model="english">

        <button
            @click="clickHandler">next</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            educateFrom: '',
            educateTo: '',
            school: '',
            major: '',
            diploma: '',
            english: '',
        };
    },
    methods: {
        ...mapActions([
            'updateEduInfo',
        ]),
        clickHandler() {
            this.updateEduInfo({
                educateFrom: this.educateFrom,
                educateTo: this.educateTo,
                school: this.school,
                major: this.major,
                diploma: this.diploma,
                english: this.english,
            });
        }
    }
}
</script>

<style lang="css">
</style>
