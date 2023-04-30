<template>
    <header class="header servicesHeader">
        <h1>Nos Services</h1>
        <p class="headerText">
            Nous offrons pas mal de services.
        </p>
    </header>
    <main class="mainWidth flex column gap20">
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
const services = {
    design: {
        id: 1,
        title: "Web design",
        text: "Nous créons des sites web pour les entreprises et les particuliers.",
        icon: "<IconDesign />"
    },
    developpement: {
        id: 2,
        title: "Développement",
        text: "Nous créons des sites web pour les entreprises et les particuliers.",
        icon: "<IconDesign />"
    },
    hebergement: {
        id: 3,
        title: "Hébergement",
        text: "Nous créons des sites web pour les entreprises et les particuliers.",
        icon: "<IconDesign />"
    },
    conseil: {
        id: 4,
        title: "Conseil",
        text: "Nous créons des sites web pour les entreprises et les particuliers.",
        icon: "<IconDesign />"
    }
}

</script>

<style scoped>
.serviceTitle {
    font-size: 24px;
    font-weight: 600;
}
.serviceText {
    font-size: 16px;
    font-weight: 400;
}
</style>