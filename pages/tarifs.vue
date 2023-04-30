
import { TarifsBoardMain } from '~/.nuxt/components';

<template>
    <header class="header relative tarifHeader flex justifyCenter">
        <div class="tarifsHeaderContent flex column gap20 z_1000">
            <h2 class="textAlignCenter bodyH2">Nos tarifs</h2>
            <p class="bodyText">
                Du site standard au site personnalisé, nous vous proposons des offres adaptées à vos 
                besoins et votre budget.
            </p>
        </div>

        <div class="absolute top0 left0 w100 h100">
            <img src="/images/triangles.svg" class="triangles objectFitCover" alt="">
        </div>
    </header>

    <main class="tarifMain mainWidth flex column alignCenter">
        <section class="mainWidth flex justifyCenter marTop50">
            <ul class="smallWidth flex column gap20">
                <li class="marTop50">
                    <h3 class="bodyH3">sites standards</h3>
                    <p class="marTop5 bodyText">
                        Ils comportent toutes les pages nécessaires à la présentation de votre activité et de vos 
                        services.  Vous choisissez un modèle standards parmis nos modèles de site et on y intègre vos textes 
                        et vos photos pour y injecter l'image de votre entreprise.
                    </p>
                </li>

                <li class="marTop50">
                    <h3 class="bodyH3">sites premiums</h3>
                    <p class="marTop5 bodyText">
                        En plus des pages de bases du sites standards, les sites premiums incluent une galerie d'images 
                        ou un portefolio pour présenter vos réalisations.  Vous pourrez allimenter ces pages grâce à 
                        un espace administrateur performant et facile d'utilisation.  Vous choisissez un modèle premiums 
                        parmis nos modèles de site et on y intègre vos textes et vos photos pour y injecter l'image 
                        de votre entreprise. 
                    </p>
                
                </li>

                <li class="marTop50">
                    <h3 class="bodyH3">sites personnalisé</h3>
                    <p class="marTop5 bodyText">
                        Les sites personnalisés comportent les pages de base ou les pages premiums selon vos besoin,
                        mais nous créons un logo, une chartre graphique et un design sur mesure inspiré de l'image de votre 
                        entreprise. C'est le meilleur moyen de faire connaître votre identité et vos valeurs à vos clients.
                    </p>
                </li>
            </ul>
        </section>


        <TarifsBoardMain />
    </main>
</template>

<style scoped>

.tarifsHeaderContent {
    width: min(750px, 90vw);

}
</style>