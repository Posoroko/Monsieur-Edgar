<template>
    <div class="serviceCard w100 flex gap20">
        <div class="imageFrame h100">
            <slot name="icon" />
        </div>

        <div class="contentBox h100 flex column">
            <ServiceCardContent :title="title" :text="text" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    text: String
})
</script>

<style scoped>
.serviceCard {
    
    background-color: var(--bg-secondary);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
}
.imageFrame{
    height: 300px;
    aspect-ratio: 1/1;
    background-color: #ffffff2d;
    border-radius: 10px;
}
.contentBox {
    height: 300px;
    flex-grow: 1;
}
</style>