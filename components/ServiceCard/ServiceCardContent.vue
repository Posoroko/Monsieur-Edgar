<template>
    <div class="full flex column gap20 justifyEnd">
        <h2 class="bodyH2 serviceTitle raleway">
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

<style scoped>

.serviceText {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
}
</style>