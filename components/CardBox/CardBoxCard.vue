<template>
    <li class="card cardColor flex column justifyBetween">
        <div class="imageFrame centered">
            <slot />
        </div>

        <div class="textFrame">
            <header class="cardTitle">{{ title }}</header>

            <p class="cardText">
                {{ text }}
            </p>
        </div>
    </li>
</template>

<script setup>
const props = defineProps({
    title: String,
    text: String,
    img: String
})
</script>

<style setup>
.card {
    width: 300px;
    aspect-ratio: 1/1;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

.imageFrame {
    height: 150px;
    padding: 10px;
    opacity: 0.6;
    transition: 300ms ease;
}

.card:hover .imageFrame {
    opacity: 1;
    transition: 300ms ease;
}
</style>