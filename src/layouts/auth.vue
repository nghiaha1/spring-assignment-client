<template>
    <NavigationBrand />
    <slot />
</template>

<script>
import NavigationBrand from '@/components/NavigationBrand.vue'
export default {
    name: 'authVue',
    components: { NavigationBrand }
}
</script>

<style>
</style>