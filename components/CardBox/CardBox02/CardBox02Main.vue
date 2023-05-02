<template>
    <CardBoxMain>

        <div class="flex justifyCenter gap20 wrap">
            <CardBoxCard :title="cardsContent.service.title" :text="cardsContent.service.text">
                <IconDesign />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.accompagnement.title" :text="cardsContent.accompagnement.text">
                <IconDeveloppement />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.prix.title" :text="cardsContent.prix.text">
                <IconHebergement />
            </CardBoxCard>
        </div>

    </CardBoxMain>
</template>

<script setup>

const cardsContent = {
    service: {
        id: "1",
        image: null,
        title: "Service humain",
        text: "Une entreprise locale, passionnée par le fait-main, partenaire des travailleurs indépendants.",
    },
    accompagnement: {
        id: "2",
        image: null,
        title: "Accompagnement total",
        text: "Nous sommes présents depuis la conception jusqu'à la maintenance de votre site.",
    },
    prix: {
        id: "3",
        image: null,
        title: "Prix compétitifs",
        text: "Un service clé en main artisanal, local et personnalisé à un prix attractif.",
    }
}


</script>