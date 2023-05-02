<template>
    <div class="relative overflowHidden">
        <div class="absoluteFull">
            <img src="/images/triangles.svg" class="triangle objectFitCover" alt="">
        </div>

        <header class="header homeHeader relative mainWidth flex wrap">
            <div class="leftBox flex column gap50">
                <h1 class="headerMainTitle">Service complet pour votre projet de site web.</h1>
                <p class="headerText">
                    Vous êtes un professionnel ? Monsieur Edgar vous aide à développer votre visibilité en ligne en créant le site web qui vous ressemble./ adapté à vos besoins. 
                </p>
            </div>

            <div class="sceneBox absolute top0 right0 centered h100">
                <img src="/images/home-scene.png" class="homeScene" alt="">
            </div>
        </header>
    </div>
</template>

<style scoped>
.triangle{
    opacity: 0.05;
}

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