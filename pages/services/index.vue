<template>
    <header class="header servicesHeader flex column alignCenter gap20 relative">
        <h1 class="headerMainTitle">Nos services</h1>
        <p class="headerText smallWidth">
            Que vous ayez besoin d’un service complet ou simplement de conseils, nous sommes à votre écoute pour trouver la solution qui conviendra le mieux à votre projet.
        </p>

        <div class="absolute top0 left0 w100 h100">
            <img src="/images/triangles.svg" class="triangles objectFitCover" alt="">
        </div>
    </header>

    <main class="serviceCardBox shortWidth flex column gap40">
        <ServiceCardMain :title="services.googleBusiness.title" :text="services.googleBusiness.text" :linkOn="true" link="/services/fiche_etablissement_google">
            <template #icon>
                <IconBusiness />
            </template>
        </ServiceCardMain>

        <ServiceCardMain :title="services.design.title" :text="services.design.text">
            <template #icon>
                <IconDesign />
            </template>
        </ServiceCardMain>

        <ServiceCardMain :title="services.developpement.title" :text="services.developpement.text">
            <template #icon>
                <IconDeveloppement />
            </template>
        </ServiceCardMain>

        <ServiceCardMain :title="services.hebergement.title" :text="services.hebergement.text">
            <template #icon>
                <IconHebergement />
            </template>
        </ServiceCardMain>

        <ServiceCardMain :title="services.conseil.title" :text="services.conseil.text">
            <template #icon>
                <IconHands />
            </template>
        </ServiceCardMain>
    </main>
</template>

<script setup>
import { services } from '@/assets/content/services'

</script>

<style scoped>
.serviceCardBox {
    margin: auto;
    margin-top: 100px;
}
.serviceTitle {
    font-size: 24px;
    font-weight: 600;
}
.serviceText {
    font-size: 16px;
    font-weight: 400;
}
.serviceCardBox {
    padding: 15px;
}
</style>