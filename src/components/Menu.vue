<template>
    <div>
        <header><h1>Menu - {{ vendor.name }}</h1></header>
        <section id="menu">
            <h2>Entrees</h2>
            <ul class="menu-list">
                <li v-for="(entree, index) in menu.entrees" v-bind:key="index"><h4>{{ entree }}</h4></li>
            </ul>
                
            <br>

            <h2>Sides</h2>
            <ul class="menu-list">
                <li v-for="(side, index) in menu.sides" v-bind:key="index"><h4>{{ side }}</h4></li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import api from '../api';
import SimpleMenu from '../models/SimpleMenu';

@Component({
    components: { },
})
export default class Menu extends Vue {
    private vendor: any = {
        name: 'Social Welfare' as string,
        email: 'rowaneatkinson' as string,
    };

    private menu: SimpleMenu = {
        entrees: [] as string[],
        sides: [] as string[],
    };

    public mounted() {
        const response = api.get('menu', this.vendor.email);
        // console.log(response);
        if ( response ) {
            response
            .then((data) => {
                console.log(data);
                this.menu = new SimpleMenu(data.data);
            })
            .catch((error) => console.error(error.message));
        }
    }
}
/*
export default Vue.extend({
    data() {
        return {
            vendor: {
                name: 'Social Welfare' as string,
                email: 'rowaneatkinson' as string,
            },
            menu: {} as SimpleMenu,
        };
    },
    mounted() {
        const response = api.get('menu', this.vendor.email);
        // console.log(response);
        if ( response ) {
            response
            .then((data) => {
                console.log(data);
                this.menu = new SimpleMenu(data.data);
            })
            .catch((error) => console.error(error.message));
        }
    },
});
*/
</script>

<style scoped>

</style>