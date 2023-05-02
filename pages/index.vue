
<template>
    <HomeHeaderMain />

    <section class="mainWidth flex column gap50 marTop100">
        <div class="bodyTitleAndParagraph">
            <p class="bodyH2">
                Vos services présentés de façon claire.
            </p>

            <p class="bodyText shortWidth">
                La façon dont un utilisateur interagit et expérimente votre site web déterminera votre impact. Nous construisons des interfaces
                facile d'utilisation et ergonomiques pour que vos clients accèdent à vos services de façon intuitive.  Nous vous accompagnons à chaque étape
                pour maîtriser chaque détail de votre projet.
            </p>
        </div>

        <h2 class="bodyH2 marTop20 flex justifyCenter">Nos services</h2>

        <CardBox01Main />
    </section>

    <div class="bodySceneBox mainWidth flex justifyCenter">
        <img src="/images/body-scene.png" class="bodyScene" alt="">
    </div>

    <section class="mainWidth flex column gap50">
        <div class="bodyTitleAndParagraph">
            <p class="bodyH2">
                Vous simplifier la vie avec des solutions adaptées.
            </p>

            <p class="bodyText shortWidth">
                Nous prenons en compte toutes vos envies afin de vous offrir un service sur mesure, vous conseiller en fonction de vos besoins, et restons à vos côtés tout le long de la réalisation de votre projet web. 
            </p>
        </div>

        <h2 class="bodyH2 marTop20 flex justifyCenter">Nos engagements</h2>

        <CardBox02Main />
    </section>
</template>

<style scoped>
.bodySceneBox {
    height: 50vh;
    margin: 100px auto;
}
.bodySceneBox img {
    height: 100%;
}
</style>