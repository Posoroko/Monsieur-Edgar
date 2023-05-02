
import { TarifsBoardMain } from '~/.nuxt/components';

<template>
    <header class="header relative tarifHeader flex justifyCenter">
        <div class="tarifsHeaderContent flex column gap20 z_1000">
            <h2 class="textAlignCenter bodyH2">Nos tarifs</h2>
            <p class="bodyText">
                Pour vos petits ou grands projets, nous proposons des devis adaptés à vos besoins et à votre budget.
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
                    <h3 class="bodyH3">Sites standards</h3>
                    <p class="marTop5 bodyText">
                        L’offre standard comporte : une page d’accueil, la vitrine en ligne de votre entreprise, une page à propos présentant votre activité, une page détaillant chacun de vos services, ainsi qu’une page contact avec un formulaire de demande d’informations. 
    Vous choisissez un modèle de site standard parmi notre offre et nous y intégrons vos textes et vos photos. 

                    </p>
                </li>

                <li class="marTop50">
                    <h3 class="bodyH3">Sites premiums</h3>
                    <p class="marTop5 bodyText">
                        En plus de toutes les pages comprises dans l’offre standard, les sites premium incluent en plus une galerie de photos ou un portfolio présentant vos réalisations. Vous avez également la possibilité d’ajouter toute autre page de votre choix (frais supplémentaires). Vous bénéficiez en outre de votre propre espace administrateur, facile à prendre en main, vous permettant d’alimenter votre site et d’en gérer le contenu.
    Vous choisissez un modèle de site premium parmi notre offre et nous y intégrons vos textes et vos photos.
 
                    </p>
                
                </li>

                <li class="marTop50">
                    <h3 class="bodyH3">Sites personnalisés</h3>
                    <p class="marTop5 bodyText">
                        Vos besoins sont précis ? Nous créons pour vous un site 100% unique réalisé à partir de l’offre standard ou premium, avec en plus un logo et une charte graphique personnalisés dans un design sur mesure inspiré de l’image de votre entreprise. Nous prenons le temps de créer avec vous une image de marque répondant à vos besoins, mais vous pouvez aussi faire appel à l’un de nos collaborateurs si vous êtes dans l’urgence. 
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