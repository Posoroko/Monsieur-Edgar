<template>
    <header class="mainWidth marTop100">
        <ServiceCardMain :title="services.googleBusiness.title" :text="services.googleBusiness.text" :linkOn="false" link="/services/fiche_etablissement_google">
            <template #icon>
                <IconBusiness />
            </template>
        </ServiceCardMain>
    </header>
    <main class="marTop150">
        <section class="smallWidth marTop100">
            <h2 class="bodyH2">Avantages pour votre entreprise</h2>
            <ul class="marTop50 flex column gap10">
                <li>
                    <h3>
                        Visibilité, trafic et engagement :
                    </h3>
                    <p>
                        Une fiche d'établissement Google complète dôtée d'un design attrayant et cohérent attire l'attention des utilisateurs et les encourage à vous rendre visite et à vous contacter. 
                    </p>
                </li>

                <li>
                    <h3>
                        Amélioration de la réputation en ligne :
                    </h3>
                    <p>
                        Une gestion proactive des avis clients et des questions d'utilisateurs montre que vous êtes engagé envers votre clientèle et renforce votre réputation en ligne.
                    </p>
                </li>

                <li>
                    <h3>
                        Optimisation pour le référencement local :
                    </h3>
                    <p>
                        Notre équipe veillera à ce que votre fiche d'établissement Google soit correctement optimisée pour le référencement local. Ainsi, votre entreprise apparaîtra plus facilement dans les résultats de recherche lorsque les utilisateurs chercheront des produits ou services similaires à proximité.
                    </p>
                </li>
            </ul>
        </section>

        <section class="smallWidth marTop100">
            <h2 class="bodyH2">Ce que nous proposons</h2>
            <ul class="marTop50 flex column gap10">
                <li>
                    <h3>
                        Conception graphique attrayante :
                    </h3>
                    <p>
                        Nous ajoutons des images et des vidéos de haute qualité mettant en valeur votre entreprise. Cela donne aux utilisateurs une idée plus précise de ce que vous offrez, ce qui suscitera leur intérêt.
                    </p>
                </li>

                <li>
                    <h3>
                        Informations complètes et précises :
                    </h3>
                    <p>
                        Nous veillons à ce que toutes les informations pertinentes concernant votre entreprise soient correctement saisies sur la fiche d'établissement Google.
                    </p>
                </li>

                <li>
                    <h3>
                        Gestion continue possible :
                    </h3>
                    <p>
                        Vous manquez de temps pour maintenir à jour vos fiche d'établissement Google ? Nous pouvons gérer pour vous la mise à jour des informations, la gestion des avis clients, les réponses aux questions des utilisateurs, et bien plus encore.
                    </p>
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup>
import { services } from '@/assets/content/services'

</script>

<style setup>
li h3 {
    font-family: 'Raleway', 'sans-serif';
    font-size: 20px;
    margin-top: 20px;
}
li p {
    font-size: 18px;
    line-height: 26px;
    margin-top: 10px;
}
</style>