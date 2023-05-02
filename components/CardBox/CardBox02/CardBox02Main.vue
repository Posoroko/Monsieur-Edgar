<template>
    <CardBoxMain>

        <div class="flex justifyCenter gap20 wrap">
            <CardBoxCard :title="cardsContent.design.title" :text="cardsContent.design.text">
                <IconDesign />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.developpement.title" :text="cardsContent.design.text">
                <IconDeveloppement />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.hebergement.title" :text="cardsContent.hebergement.text">
                <IconHebergement />
            </CardBoxCard>
        </div>

    </CardBoxMain>
</template>

<script setup>

const cardsContent = {
    design: {
        id: "1",
        image: null,
        title: "Service humain",
        text: "Une entreprise locale, passionnée par le fait-main, partenaire des travailleurs indépendants.",
    },
    developpement: {
        id: "2",
        image: null,
        title: "Accompagnement total",
        text: "Nous sommes sd présents depuis la conception jusqu'à la maintenance de votre site.",
    },
    hebergement: {
        id: "3",
        image: null,
        title: "Prix compétitifs",
        text: "Un service artisanal, local et personnalisable à un prix attractif.",
    }
}


</script>