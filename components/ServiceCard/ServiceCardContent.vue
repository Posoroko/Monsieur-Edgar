<template>
    <div class="full">
        <h2 class="serviceTitle">
            {{ title }}
        </h2>

        <p class="serviceText">
            {{ text }}
        </p>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    text: String
})

</script>