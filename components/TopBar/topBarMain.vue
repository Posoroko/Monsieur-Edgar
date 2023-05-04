
<template>
    <div class="topBarBox flex justifyBetween wrap relative z_5000">
        <NuxtLink to="/" class="flexA h100">
            <WidgetsLogo />
        </NuxtLink>

        <div class="flexB h100 flex alignCenter">
            <TopBarTabBox />
        </div>

        <div class="flexC h100 flex alignCenter">
            <WidgetsSocialBox />
        </div>
    </div>
</template>

<style scoped>
.topBarBox {
    width: 100%;
    height: 80px;
    padding: 10px;
}
@media (max-width: 767px) {
    .flexA {order: 1;}
    .flexB {
        width: 100%;
        margin-top: 10px;
        order: 3;
        display: flex;
        justify-content: center;
        gap: 5px;
    }
    .flexC {order: 2;}
}
@media (min-width: 768px) {
    .flexA {order: 1;}
    .flexB {order: 2; gap: 20px;}
    .flexC {order: 3;}
}

</style>