<template>
    <NuxtLink :to="tab.link" class="button1 relative centered" :class="{ 'active': route.path == tab.link }" v-for="tab in tabs" :key="tab.name">
        <span class="text">{{ tab.name }}</span>
    </NuxtLink>
</template>

<script setup>

const route = useRoute()

console.log(route.path)


const tabs = [
    {
        name: 'services',
        link: '/services'
    },
    {
        name: 'tarifs',
        link: '/tarifs'
    },
    {
        name: 'contact',
        link: '/contact'
    },
    {
        name: 'à propos',
        link: '/a-propos'
    }
]
</script>

<style scoped>

</style>