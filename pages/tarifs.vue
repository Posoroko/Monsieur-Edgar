
import { TarifsBoardMain } from '~/.nuxt/components';

<template>
    <header class="header tarifHeader flex justifyCenter r">
        <div class="tarifsHeaderContent flex column gap20">
            <h2 class="textAlignCenter bodyH2">Nos tarifs</h2>
            <p class="bodyText">
                Du site standard au site personnalisé, nous vous proposons des offres adaptées à vos 
                besoins et votre budget.
            </p>
        </div>
    </header>

    <main class="tarifMain mainWidth flex column alignCenter">
        <section class="mainWidth flex justifyCenter marTop50">
            <ul class="smallWidth flex column gap20">
                <li>
                    <h3 class="bodyH3">sites standards</h3>
                    <p class="marTop5">
                        Ils comportent toutes les pages nécessaires à la présentation de votre activité et de vos 
                        services.  Vous choisissez un modèle standards parmis nos modèles de site et on y intègre vos textes 
                        et vos photos pour y injecter l'image de votre entreprise.
                    </p>
                    Les sites premiums incluent des pages 
                    supplémentaires que vous pourrez
                </li>

                <li>
                    <h3 class="bodyH3">sites premiums</h3>
                    <p class="marTop5">
                        En plus des pages de bases du sites standards, les sites premiums incluent une galerie d'images 
                        ou un portefolio pour présenter vos réalisations.  Vous pourrez allimenter ces pages grâce à 
                        un espace administrateur performant et facile d'utilisation.  Vous choisissez un modèle premiums 
                        parmis nos modèles de site et on y intègre vos textes et vos photos pour y injecter l'image 
                        de votre entreprise. 
                    </p>
                
                </li>

                <li>
                    <h3 class="bodyH3">sites personnalisé</h3>
                    <p class="marTop5">
                        Les sites personnalisés comportent les pages de base ou les pages premiums selon vos besoin,
                        mais nous créons un logo, une chartre graphique et un design sur mesure inspiré de l'image de votre 
                        entreprise. C'est le meilleur moyen de faire connaître votre identité et vos valeurs à vos clients.
                    </p>
                </li>
            </ul>
        </section>
        <div class="introtext marTop50">
            <p>

            </p>
        </div>

        <TarifsBoardMain />
    </main>
</template>

<style scoped>
.tarifsHeaderContent {
    width: min(750px, 90vw);
}
</style>