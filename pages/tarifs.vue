<template>
    <header class="header relative tarifHeader flex justifyCenter">
        <div class="tarifsHeaderContent flex column gap20 z_1000">
            <h2 class="textAlignCenter headerMainTitle">Nos tarifs</h2>
            <p class="bodyText">
                Pour vos petits ou grands projets, nous proposons des devis adaptés à vos besoins et à votre budget.
            </p>
        </div>

        <div class="absolute top0 left0 w100 h100">
            <img src="/images/triangles.svg" class="triangles objectFitCover" alt="">
        </div>
    </header>

    <main class="tarifMain mainWidth flex column alignCenter">


        <section class="marTop100">
            <h1 class="bodyH2 centered marTop20">Référencement et présence en ligne</h1>
            <div class="marTop50 flex justifyCenter">
                <TarifsBoardCard 
                    :name='googleBusiness.name'
                    :price='googleBusiness.price'
                    :topCardText='googleBusiness.topCardText'
                    :specs='googleBusiness.specs'
                    />
            </div>
        </section>


        <TarifsBoardMain />

        <section  class="mainWidth flex justifyCenter marTop100">
            <ul class="smallWidth flex column gap20">
                <li class="marTop50" id="detailBoxstandard">
                    <h3 class="bodyH3 titlestandard">Site standard</h3>
                    <p class="marTop5 bodyText">
                        L’offre standard comporte : une page d’accueil, une page à propos présentant votre activité, une page détaillant chacun de vos services, ainsi qu’une page contact avec un formulaire de demande d’informations. 
                        Vous choisissez un modèle de site standard parmi notre offre et nous y injectons l'image de votre entreprise en y intégrant vos textes et vos photos. 

                    </p>
                </li>

                <li class="marTop50" id="detailBoxpremium">
                    <h3 class="bodyH3 titlepremium">Site premium</h3>
                    <p class="marTop5 bodyText">
                        En plus des pages de l’offre standard, les sites premium incluent une page à contenu dynamique pour rendre votre site plus vivant. Vous avez le choix parmi les pages suivantes : page actualité, agenda, blog, galerie photos ou portfolio. Grâce à votre espace administrateur facile à prendre en main, vous pouvez alimenter en contenu votre site et partager votre activité avec vos visiteurs.
                        Vous choisissez un modèle de site premium parmi notre offre et nous y injectons l'image de votre entreprise en y intégrant vos textes et vos photos.
                        Vous avez également la possibilité d’ajouter toute autre page nécessaire à vos besoins (frais supplémentaires).
                    </p>
                
                </li>

                <li class="marTop50" id="detailBoxpersonnalisé">
                    <h3 class="bodyH3 titlecustom">Site personnalisé</h3>
                    <p class="marTop5 bodyText">
                        Vos besoins demandent une solution plus précise ? Nous créons pour vous un site 100% unique réalisé à partir de l’offre standard ou premium, avec en plus un logo et une charte graphique personnalisés dans un design sur mesure basé sur l’image de votre entreprise. 
                    </p>
                </li>
            </ul>
        </section>


        
    </main>
</template>

<script setup>
import { googleBusiness } from "@/assets/content/googleBusiness"


</script>

<style scoped>
.tarifUl li{
    width: 30%;
}
.tarifsHeaderContent {
    width: min(750px, 90vw);

}
.titlestandard {
    border-bottom: 2px solid var(--standard-color);
}
.titlepremium {
    border-bottom: 2px solid var(--premium-color);
}
.titlecustom {
    border-bottom: 2px solid var(--custom-color);
}
</style>