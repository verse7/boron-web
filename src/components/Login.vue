<template>
    <div>
        <div id="google-signin-btn" class="g-signin2" data-theme="dark"></div>
        <button v-on:click="onSignIn">WHATS MY USERNAME</button>
        <div> {{ profile }}</div>  

        <a href="#" v-on:click="signOut">Sign out</a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: { },
})
export default class Login extends Vue {

    public profile: any = "HELLO";
    public text: string = "Hello2";

    public onSignIn(googleUser: any): void {
        // Useful data for your client-side scripts:
        alert("Successful Sign-IN");
        const profile = googleUser.getBasicProfile();
        this.profile = profile;
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        const id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }

    public signOut() {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then( () => {
        console.log('User signed out.');
        });
    }

    public printName(): void {
        console.log('Full Name: ' + this.profile);
    }

    public mounted() {
        gapi.signin2.render('google-signin-btn', { // this is the button "id"
            onsuccess: this.onSignIn // note, no "()" here
        });
    }
    /*
    public monted() {
        gapi.auth2.init({
            client_id: "201918207929-d6aaqtnb51o9v71tfurb282ocdrb72cs.apps.googleusercontent.com",
        });
    }
    */
}
</script>

<style scoped>

</style>