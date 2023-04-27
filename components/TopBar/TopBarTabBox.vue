<template>
    <div class="button1 relative centered" :class="{ 'active' : route.path == tab.link}" v-for="tab in tabs" :key="tab.name">
        <NuxtLink class="text" :to="tab.link">
            {{ tab.name }}
        </NuxtLink>
    </div>
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
    }
]
</script>

<style scoped>

</style>