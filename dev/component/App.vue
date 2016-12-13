<template lang="html">
    <div class="app-container">
        <basic-info></basic-info>
        <edu-info></edu-info>

        <hr>
        <button
            @click="submitHandler">submit</button>

        <router-view></router-view>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import BasicInfo from './BasicInfo.vue';
import EduInfo from './EduInfo.vue';

export default {
    methods: {
        ...mapActions([
            'submitUserInfo',
        ]),
        submitHandler() {
            this.submitUserInfo();
        },
    },
    components: {
        BasicInfo,
        EduInfo,
    }
}
</script>

<style lang="scss">
// @import "../style/reset";
// @import "../style/mixin";
// @include font-face("Lato-Regular");

.app-container{
    // background-color: red;
}
</style>
