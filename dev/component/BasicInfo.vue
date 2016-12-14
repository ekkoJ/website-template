<template lang="html">
    <div class="basic-info">
        <h1>Basic Information</h1>

        <input
            type="text"
            name="name"
            placeholder="name"
            v-model="name">

        <input
            type="radio"
            name="sex"
            value="1"
            v-model="sex">
        <input
            type="radio"
            name="sex"
            value="0"
            v-model="sex">

        <input
            type="date"
            name="birthday"
            v-model="birthday">
        <input
            type="text"
            name="nativePlace"
            placeholder="nativePlace"
            v-model="nativePlace">
        <input
            type="email"
            name="mail"
            placeholder="mail"
            v-model="mail">
        <input
            type="tel"
            name="phone"
            placeholder="phone"
            v-model="phone">
        <input
            type="text"
            name="applyFor"
            placeholder="applyFor"
            v-model="applyFor">
        <input
            type="text"
            name="salary"
            placeholder="salary"
            v-model="salary">
        <input
            type="date"
            name="arrive"
            placeholder="arrive"
            v-model="arrive">

        <button
            @click="clickHandler">next</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            name: '',
            sex: NaN,
            birthday: '',
            nativePlace: '',
            mail: '',
            phone: '',
            applyFor: '',
            salary: '',
            arrive: '',
        };
    },
    methods: {
        ...mapActions([
            'updateBasicInfo',
        ]),
        clickHandler() {
            this.updateBasicInfo({
                name: this.name,
                sex: parseInt(this.sex),
                birthday: this.birthday,
                nativePlace: this.nativePlace,
                mail: this.mail,
                phone: this.phone,
                applyFor: this.applyFor,
                salary: this.salary,
                arrive: this.arrive,
            });
        },
    },
}
</script>

<style lang="css">
</style>
