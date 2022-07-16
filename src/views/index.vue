<template>
    <div class="flex flex-row w-fit">
        <div class="px-1 bg-gray-300">
            <form @submit.prevent="submitSort" class="flex flex-col space-y-6 justify-start">
                <div class="col">
                    <label class="flex flex-col px-2 pt-3">
                        <span class="font-semibold">Page</span>
                        <input class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text"
                            placeholder="Set page number" v-model="page" />
                    </label>
                </div>
                <div class="col">
                    <label class="flex flex-col px-2">
                        <span class="font-semibold">Number of product</span>
                        <input class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="number"
                            placeholder="Input number of products" v-model="limit" />
                    </label>
                </div>

                <div class="row">
                    <button type="submit"
                        class="px-5 py-3 text-center w-full bg-blue-500 font-bold rounded-lg">Submit</button>
                </div>
            </form>
        </div>

        <div class=" overflow-x-auto border-x border-t w-full" v-if="tableDatas.length">
            <div class="px-4 py-3">
                <div class="font-bold title flex float-left">{{ title }}</div>
                <span class="px-2 float-right">/ {{ title }}</span>
                <router-link class="float-right" :to="{ name: 'Home', params: {} }">Home</router-link>
            </div>
            <table class=" table-auto w-full">
                <thead class="font-bold font-sans h-10 border-b">
                    <tr class=" bg-gray-300">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Thumbnails</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class="text-left ">
                    <tr class="border-b border-y hover:bg-gray-50" v-for="tableData in tableDatas" :key="tableData.id">
                        <td class="p-4">{{ tableData.id }}</td>
                        <td class="p-4">{{ tableData.name }}</td>
                        <td class="p-4">{{ tableData.description }}</td>
                        <td class="p-4"><img :src="tableData.thumbnails" :alt="tableData.name"></td>
                        <td class="p-4">{{ tableData.price }}₫</td>
                        <td class="p-4">{{ tableData.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import axios from 'axios';
export default {
    name: 'indexVue',
    setup() {
        const title = ref("");
        const tableDatas = ref([]);
        const page = ref("");
        const limit = ref("");
        const nameProduct = ref("");
        const error = ref(null);
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://spring-big-assignment.herokuapp.com/api/v1/products?page=${page}&limit=${limit}`);
                const response = await axios.post(`http://localhost:8091/api/v1/products/list`);
                tableDatas.value = response.data.content;
                title.value = "Products"
            } catch (err) {
                error.value = "ERROR!"
            }
        }

        fetchData();

        const submitSort = async () => {
            try {
                const response = await axios.post(`http://localhost:8091/api/v1/products/list?page=${page.value}&limit=${limit.value}&nameProduct=${nameProduct.value}`, {
                    page: page.value,
                    limit: limit.value,
                });
                tableDatas.value = response.data.content;
            } catch (err) {
                error.value = err;
            }
        }
        return {
            tableDatas, error, title, page,
            limit, submitSort
        }
    }
}
</script>

<style>
.title {
    font-size: 25px;
}
</style>