<template lang="html">
    <div class="work-info">
        <h1>Work Experience</h1>

        <input
            type="date"
            name="workFrom"
            v-model="workFrom">

        <input
            type="date"
            name="workTo"
            v-model="workTo">

        <input
            type="text"
            name="company"
            placeholder="company"
            v-model="company">

        <input
            type="text"
            name="position"
            placeholder="position"
            v-model="position">

        <input
            type="text"
            name="positionDescription"
            placeholder="positionDescription"
            v-model="positionDescription">

        <input
            type="text"
            name="treatment"
            placeholder="treatment"
            v-model="treatment">

        <input
            type="text"
            name="leaveReason"
            placeholder="leaveReason"
            v-model="leaveReason">

        <button
            @click="clickHandler">next</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            workFrom: '',
            workTo: '',
            company: '',
            position: '',
            positionDescription: '',
            treatment: '',
            leaveReason: '',
        };
    },
    methods: {
        ...mapActions([
            'updateWorkInfo',
        ]),
        clickHandler() {
            this.updateWorkInfo({
                workFrom: this.workFrom,
                workTo: this.workTo,
                company: this.company,
                position: this.position,
                positionDescription: this.positionDescription,
                treatment: this.treatment,
                leaveReason: this.leaveReason,
            });
        },
    },
}
</script>

<style lang="css">
</style>
