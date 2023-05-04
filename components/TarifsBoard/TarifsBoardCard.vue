<template>
    <div class="tarifCardBox flex column gap10">
        <div class="topBox flex column alignCenter gap10">
            <h2 class="tarifTitle flex justifyCenter alignCenter relative" :class="`tarifTitle${title}`">
                {{ `Site ${title}` }}
            </h2>

            <p class="servicePriceLine">
                <span class="text" v-if="from">à partir de</span> &nbsp <span class="price">{{ price }}€</span>
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
                        <span class="specLineIcon iconOutlined specCheck custom centered" v-if="spec.plan == 'custom'">verified</span>
                        <span class="specLineIcon iconOutlined specCheck premium centered" v-else-if="spec.plan == 'premium'">verified</span>
                        <span class="specLineIcon iconOutlined specCheck standard centered" v-else>check_circle</span>
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
                    </span>
                </li>
            </ul>
        </div>
        <div class="detailBox flex justifyCenter">
            <a class="detailButton flex alignCenter gap5" :href="`#detailBox${title}`">en savoir plus <span class="icon">arrow_downward</span></a>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    from: Boolean,
    price: Number,
    topCardText: String,
    specs: Array,
    customText: String
})
console.log(props.specs)

</script>

<style scoped>
.detailButton {
    font-size: 15px;
    font-weight: 500;
    background-color: var(--bg-main);
    padding: 10px 20px;
    border-radius: 7px;
}
.detailButton:hover {
    color: var(--bg-main);
    background-color: var(--funky-main);
}
.detailButton:hover .icon{
    color: var(--bg-main);
}
.tarifCardBox {
    width: min(90vw, 350px);
    background-color: var(--card-bg);
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
}
.tarifTitlestandard {
        border-bottom: 1px solid green;
}
.tarifTitlepremium {
    border-bottom: 1px solid var(--premium-color);
}
.tarifTitlepersonnalisé {
    border-bottom: 1px solid var(--custom-color);
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
.standard {
    color: green;
}
.premium {
    color: var(--premium-color);
}
.custom {
    color: var(--custom-color);
}
</style>