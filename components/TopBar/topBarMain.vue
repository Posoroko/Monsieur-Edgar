
<template>
    <div class="topBarBox flex justifyBetween">
        <NuxtLink to="/" class="h100">
            <WidgetsLogo />
        </NuxtLink>

        <div class="h100 flex alignCenter gap20">
            <TopBarTabBox />
        </div>

        <div class="h100 flex alignCenter">
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

</style>