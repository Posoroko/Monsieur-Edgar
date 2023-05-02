
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
        <TarifsBoardMain />

        <section class="mainWidth flex justifyCenter marTop50">
            <ul class="smallWidth flex column gap20">
                <li class="marTop50">
                    <h3 class="bodyH3">Sites standards</h3>
                    <p class="marTop5 bodyText">
                        L’offre standard comporte : une page d’accueil, une page à propos présentant votre activité, une page détaillant chacun de vos services, ainsi qu’une page contact avec un formulaire de demande d’informations. 
                        Vous choisissez un modèle de site standard parmi notre offre et nous y injectons l'image de votre entreprise en y intégrant vos textes et vos photos. 

                    </p>
                </li>

                <li class="marTop50">
                    <h3 class="bodyH3">Sites premiums</h3>
                    <p class="marTop5 bodyText">
                        En plus des pages de l’offre standard, les sites premium incluent une page supplémentaire pour rendre votre site plus vivant. Vous avez le choix parmi les pages suivantes : page actualité, agenda, blog, galerie photos ou portfolio. Grâce à votre espace administrateur facile à prendre en main, vous pouvez alimenter en contenu votre site et partager votre activité avec vos visiteurs.
                        Vous choisissez un modèle de site premium parmi notre offre et nous y injectons l'image de votre entreprise en y intégrant vos textes et vos photos.
                        Vous avez également la possibilité d’ajouter toute autre page nécessaire à vos besoins (frais supplémentaires).
 
                    </p>
                
                </li>

                <li class="marTop50">
                    <h3 class="bodyH3">Sites personnalisés</h3>
                    <p class="marTop5 bodyText">
                        Vos besoins demandent une solution plus précise ? Nous créons pour vous un site 100% unique réalisé à partir de l’offre standard ou premium, avec en plus un logo et une charte graphique personnalisés dans un design sur mesure basé sur l’image de votre entreprise. 
                    </p>
                </li>
            </ul>
        </section>


        
    </main>
</template>

<style scoped>
.tarifUl li{
    width: 30%;
}
.tarifsHeaderContent {
    width: min(750px, 90vw);

}
</style>