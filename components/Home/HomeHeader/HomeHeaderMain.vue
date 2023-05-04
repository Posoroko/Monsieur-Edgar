<template>
    <div class="relative overflowHidden noEvents z_0000">
        <div class="trianglesBox absoluteFull noEvents ">
            <img src="/images/triangles.svg" class="triangles objectFitCover noEvents" alt="">
        </div>

        <header class="header homeHeader relative mainWidth flex wrap z_0000">
            <div class="leftBox flex column gap50">
                <h1 class="headerMainTitle">Service complet pour votre projet de site web.</h1>
                <p class="headerText">
                    Vous êtes un professionnel ? Monsieur Edgar vous aide à développer votre visibilité en ligne en créant le site web 
                    qui vous ressemble.
                </p>
                <div class="flex">
                    <NuxtLink to="/contact" class="ctaButton">Parlez-nous de votre projet</NuxtLink>
                </div>
            </div>

            <div class="sceneBox absolute top0 right0 h100 centered">
                <img src="/images/home-scene.png" class="homeScene" alt="">
            </div>
        </header>
    </div>
</template>

<style scoped>



.homeHeader .leftBox {
    width: min(100%, 700px);
}
.homeScene {
    width: min(700px, 40vw);
}
@media (max-width: 1099px) {
    .homeScene {
        display: none;
    }
}
@media (min-width: 1100px) {
    .homeScene {
        display: flex;
    }
}

</style>