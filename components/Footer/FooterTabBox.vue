<template>
    <div class="button2 relative centered" :class="{ 'active': route.path == tab.link }" v-for="tab in tabs"
        :key="tab.name">
        <NuxtLink class="text" :to="tab.link">
            {{ tab.name }}
        </NuxtLink>
    </div>

    <div class="button2 relative centered">
        <a class="text" href="https://posoroko.com">
            www.posoroko.com
        </a>
    </div>
</template>

<script setup>

const route = useRoute()

console.log(route.path)


const tabs = [
    {
        name: 'mentions légales',
        link: '/mentions-legales'
    },
    {
        name: 'plan du site',
        link: '/plans-du-site'
    }
]
</script>

<style scoped>

</style>