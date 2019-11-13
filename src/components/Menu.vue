<template>
    <div>
        <header><h1>Menu - {{ vendor.name }}</h1></header>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import api from '../api';

export default Vue.extend({
    data() {
        return {
            vendor: {
                name: 'Social Welfare' as string,
                email: 'rowaneatkinson' as string,
            },
            menu: {},
        };
    },
    mounted() {
        const response = api.get('menu', this.vendor.email);
        // console.log(response);
        if ( response ) {
            response
            .then((data) => {
                console.log(data);
                this.menu = data;
            })
            .catch((error) => console.error(error.message));
        }
    },
});
</script>

<style scoped>

</style>