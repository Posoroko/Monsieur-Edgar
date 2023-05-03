<template>
    <div class="serviceCard w100 flex gap20">
        <div class="imageFrame">
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
    outline: 2px solid transparent;
    box-shadow: 1px 2px 10px black;
    transition: 300ms ease;
}

@media (max-width: 849px) {
    .serviceCard {
        flex-direction: column;
        align-items: flex-start;
    }
    .imageFrame {
        height: 150px;
        background-color: #fff;
    }
}
@media (min-width: 850px) {
    .serviceCard {
        flex-direction: row;
        align-items: flex-end;
    }
    .imageFrame {
        height: 250px;
    }
}



.serviceCard:hover {
    outline: 2px solid var(--border-color-1);
    transition: 300ms ease;
}


.imageFrame{
    background-color: #ffffff2d;
    border-radius: 10px;
}

</style>