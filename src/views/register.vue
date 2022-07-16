<template>
    <div class="mt-8">
        <!-- Start: Form -->
        <div class="container mx-auto px-8">
            <form @submit.prevent="register" class="flex flex-col space-y-6 justify-start">
                <!-- <div class="row">
                    <label class="flex flex-col">
                        <span class="font-semibold">Fullname</span>
                        <input class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text"
                            placeholder="fullname" />
                    </label>
                </div> -->
                <div class="row">
                    <label class="flex flex-col">
                        <span class="font-semibold">Username</span>
                        <input class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text"
                            placeholder="username" v-model="username" />
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col">
                        <span class="font-semibold">Password</span>
                        <input class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
                            placeholder="password" v-model="password" />
                    </label>
                </div>
                <!-- <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Confirm Password</span>
                        <input id="rePassword" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
                            placeholder="password" />
                    </label>
                </div> -->
                <div class="row">
                    <button type="submit" class="py-3 text-center w-full bg-blue-500 font-bold rounded-lg">Sign
                        Up</button>
                </div>
            </form>
        </div>

        <!-- Start: Direction -->
        <div class="w-full text-center mt-6">
            <span class="font-semibold">Already member?</span>
            <span class="ml-4">
                <router-link :to="{ name: 'Login', params: {} }" class="text-blue-700 font-bold">Sign In</router-link>
            </span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';

export default {
    name: "registerVue",

    setup() {
        const error = ref(null);
        const username = ref("");
        const password = ref("");
        const router = useRouter();

        const register = async newAccount => {
            try {
                const res = await axios.post('http://localhost:8091/api/v1/accounts/register', newAccount = {
                    username: username.value,
                    password: password.value,
                    role: [
                        "user"
                    ]
                });
                newAccount.value.push(res.data);
                router.push({ name: 'Login', params: {} });
            } catch (err) {
                error.value = err;
            }
        }
        return {
            register, username, password, error
        };
    },
    components: {}
}
</script>

<style>
</style>