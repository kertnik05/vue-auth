<template>
    <ul>
        <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <template v-if="isAuthenticated">
            <li>
                {{ user.user_detail.first_name }} {{ user.user_detail.last_name }}
            </li>
            <li>
                <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
            </li>
            <li>
                <button type="button" @click="signOut">Sign Out</button>
            </li>
        </template>
        <template v-else>
            <li>
                <router-link :to="{ name: 'SignIn' }">Sign In</router-link>
            </li>
        </template>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Navigation',
    computed: {
        ...mapGetters({
            isAuthenticated: 'auth/isAuthenticated',
            user: 'auth/user'
        })
    },
    methods: {
        ...mapActions({
            signOutAction: 'auth/signOut'
        }),

        signOut() {
            this.signOutAction();
            this.$router.replace({ name: 'Home' });
        }
    }
}
</script>