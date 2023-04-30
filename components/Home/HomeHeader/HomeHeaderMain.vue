<template>
    <header class="header homeHeader relative mainWidth flex wrap">
        <div class="leftBox flex column gap50">
            <h1 class="headerMainTitle">Service complet pour votre projet de site web.</h1>
            <p class="headerText">
                Monsieur Edgar vous aide à développer votre visibilité en ligne en créant le site web qui vous ressemble. 
            </p>
        </div>

        <div class="sceneBox absolute top0 right0 centered h100">
            <img src="/images/home-scene.png" class="homeScene" alt="">
        </div>
    </header>
</template>

<style scoped>

.homeHeader .leftBox {
    width: min(100%, 700px);
}
.homeScene {
    width: 700px;
}
@media (max-width: 600px) {
    .homeScene {
        display: none;
    }
}
@media (min-width: 900px) {
    .homeScene {
        display: flex;
    }
}
</style>