<template>
    <div class="mt-8">
        <!-- Start: Form -->
        <div class="container mx-auto px-8">
            <form @submit.prevent="login" class="flex flex-col space-y-6 justify-start">
                <div class="row">
                    <label class="flex flex-col" for="username">
                        <span class="font-semibold">Username</span>
                        <input id="username" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text"
                            placeholder="username" autocomplete="username" v-model="username" />
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
                            placeholder="password" autocomplete="current-password" v-model="password" />
                    </label>
                </div>
                <div class="row">
                    <button type="submit" class="py-3 text-center w-full bg-blue-500 font-bold rounded-lg">Sign
                        In</button>
                </div>
            </form>

            <!-- Start: Direction -->
            <div class="w-full text-center mt-6">
                <span class="font-semibold">New member?</span>
                <span class="ml-4">
                    <router-link :to="{ name: 'Register', params: {} }" class="text-blue-700 font-bold">Sign Up
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'loginVue',
    setup() {
        const error = ref(null);
        const username = ref("");
        const password = ref("");
        const router = useRouter();

        const login = async () => {
            try {
                const res = await axios.post('http://localhost:8091/api/v1/accounts/login',
                    {
                        username: username.value,
                        password: password.value,
                    })
                    .then(res => {
                        if (res.data.accessToken) {
                            localStorage.setItem('account', res.data.accessToken)
                        }
                    });
                router.push({ name: 'Home', params: {} });
                console.log(res.data.accessToken)
            } catch (err) {
                error.value = err;
            }
        }
        return {
            login, username, password, error
        }
    }
}
</script>

<style>
</style>