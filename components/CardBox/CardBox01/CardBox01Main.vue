<template>
    <div class="flex justifyCenter gap20 wrap" >
        <div class="flex justifyCenter gap20 wrap">
            <CardBoxCard :title="cardsContent.design.title" :text="cardsContent.design.text">
                <IconDesign />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.developpement.title" :text="cardsContent.developpement.text">
                <IconDeveloppement />
            </CardBoxCard>
        </div>

        <div class="flex justifyCenter gap20 wrap">
            <CardBoxCard :title="cardsContent.hebergement.title" :text="cardsContent.hebergement.text">
                <IconHebergement />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.conseil.title" :text="cardsContent.conseil.text">
                <IconHands />
            </CardBoxCard>
        </div>
    </div>
</template>

<script setup>

const cardsContent = {
    design: {
        id: "1",
        image: null,
        title: "Design",
        text: "Offrez une expérience client réussie grâce à un site web moderne, clair et unique.",
    },
    developpement: {
        id: "2",
        image: null,
        title: "Développement",
        text: "Un code artisanal et intelligent, pour un site performant s'adaptant à tous les écrans.",
    },
    hebergement: {
        id: "3",
        image: null,
        title: "Hébergement",
        text: "Votre site web hébergé par nos soins pour que vos données restent entre de bonnes mains.",
    },
    conseil: {
        id: "4",
        image: null,
        title: "Conseil",
        text: "Étudions ensemble vos objectifs et trouvons la solution adaptée à vos besoins.",
    }
}

</script>