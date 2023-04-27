<template>
    <CardBoxMain>

        <div class="flex justifyCenter gap20 marTop20 wrap" >
            <CardBoxCard :title="cardsContent.design.title" :text="cardsContent.design.text">
                <IconDesign />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.developpement.title" :text="cardsContent.design.text">
                <IconDeveloppement />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.hebergement.title" :text="cardsContent.hebergement.text">
                <IconHebergement />
            </CardBoxCard>

            <CardBoxCard :title="cardsContent.conseil.title" :text="cardsContent.conseil.text">
                <IconHands />
            </CardBoxCard>
        </div>

    </CardBoxMain>
</template>

<script setup>

const cardsContent = {
    design: {
        id: "1",
        image: null,
        title: "Design",
        text: "Nous vous conseillons pour identifier vos objectifs et vos besoins puis nous vous proposons une solution adaptée.",
    },
    developpement: {
        id: "2",
        image: null,
        title: "Développement",
        text: "Nous vous conseillons pour identifier vos objectifs et vos besoins puis nous vous proposons une solution adaptée.",
    },
    hebergement: {
        id: "3",
        image: null,
        title: "Hébergement",
        text: "Nous vous conseillons pour identifier vos objectifs et vos besoins puis nous vous proposons une solution adaptée.",
    },
    conseil: {
        id: "4",
        image: null,
        title: "Conseil",
        text: "Nous vous conseillons pour identifier vos objectifs et vos besoins puis nous vous proposons une solution adaptée.",
    }
}

</script>