<template>
    <svg class="socialSVG pointer h100" height="15" viewBox="126.445 2.281 589 589" width="15" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle textMainColor hover" cx="420.945" cy="296.781" r="294.5"/>
        <path class="socialLogoPath" d="m516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357h-44.788v71.271h46.174v205.177h84.847v-206.531h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0v-70.403z"/>
    </svg>
</template>

<script setup>

</script>

<style scoped>
.socialSVG .circle{
    fill: var(--text-main-color);
}
.socialSVG:hover .circle{
    fill: var(--text-secondary-color);
}
.socialLogoPath {
    fill: var(--bg-main);
}
</style>