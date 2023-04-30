<template>
    <div class="tarifCardBox flex column gap10">
        <div class="topBox flex column alignCenter gap10">
            <h2 class="tarifTitle flex justifyCenter alignCenter">
                {{ title }}
            </h2>

            <p class="servicePriceLine">
                <span class="text">à partir de</span> &nbsp <span class="price">{{ price }}€</span>
            </p>

            <p class="topBoxText bodyText">
                {{  topCardText }}
            </p>
        </div>
        
        <div class="tarifCard flex column" v-if="!customText">
            <ul class="specList">
                <li class="specLineBox" v-for="spec in specs">
                    <span class="specLineContent flex justifyStart gap20"  v-if="spec.value">
                        <span class="specLineContentText flex alignCenter gap10">
                            <span class="specLineText raleway">{{ spec.text }}</span>
                        </span>
                        <span class="specLineIcon iconOutlined specCheck centered">check_circle</span>
                    </span>
                </li>
            </ul>
        </div>

        <div class="tarifCard flex column" v-if="customText">
            <ul class="specList">
                <li class="specLineBox" v-for="spec in specs">
                    <span class="specLineContent flex justifyStart gap20"  v-if="spec.value">
                        <span class="specLineContentText flex alignCenter gap10">
                            <span class="specLineText raleway">{{ spec.text }}</span>
                        </span>
                        <span class="specLineIcon iconOutlined specCheck centered">check_circle</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    price: Number,
    topCardText: String,
    specs: Array,
    customText: String
})
console.log(props.specs)

</script>

<style scoped>
.tarifCardBox {
    width: min(90vw, 350px);
    background-color: var(--bg-secondary);
    padding: 10px;
    border-radius: 10px;
}
.tarifCard {
    /* background-color: var(--bg-main); */
    border-radius: 5px;
    padding: 10px;
    flex-grow: 1;
}

.tarifTitle {
    font-size: 30px;
    font-weight: 700;
    color: var(--text-color-1);
    padding: 10px 0;
    border-bottom: 1px solid var(--border-color-1);
}
.topBoxText {
    font-size: 14px;
    line-height: 22px;
    padding: 10px;
}
.servicePriceLine .text{
    font-size: 12px;
    font-weight: 300;
    color: var(--text-color-1);
}
.servicePriceLine .price{
    font-size: 30px;
    font-weight: 500;
    color: var(--text-color-1);
}
.specLineContentText {
    width: 80%;
}

.specLineIcon {
    width: 20%;
}

.specLineContent {
    padding: 10px;
    border-bottom: 1px solid var(--border-color-1);
}


.specLineText {
    font-size: 16px;
    font-weight: 500;
}
.specCheck {
    font-size: 30px;
    color: green;
}

</style>