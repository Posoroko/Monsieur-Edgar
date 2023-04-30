<template>
    <div class="tarfsBoard flex justifyCenter gap20 wrap">
        <TarifsBoardCard 
            :title="standardContent.title" 
            :price="standardContent.price" 
            :specs="standardSpecs" 
            :topCardText="standardContent.topCardText" />
        <TarifsBoardCard 
            :title="premiumContent.title" 
            :price="premiumContent.price" 
            :specs="premiumSpecs" 
            :topCardText="premiumContent.topCardText" />
    </div>
</template>

<script setup>

const standardContent = {
    title: "Site standard",
    price: 750,
    topCardText: "Tout ce dont vous avez besoin pour être présent en ligne et rejoindre vos clients efficacement.  Vous choisissez un modèle de site qu'on adaptera à votre image."
    }
const premiumContent = {
    title: "Site premium",
    price: 1150,
    topCardText: "En plus des pages de base, faites connaître votre trvail grace à une galerie photo ou un portefolio que vous gérez avec une interface admin personnelle.  "
}

const standardSpecs = [
    {
        text: "Page d'accueil",
        value: true,
        icon: "description"
    },
    {
        text: "Page à propos",
        value: true,
        icon: "description"
    },
    {
        text: "Une page pour chacunde vos services",
        value: true,
        icon: "description"
    },
    {
        text: "Page contact",
        value: true,
        icon: "description"
    },
    {
        text: "Thème standard",
        value: true
    },
    {
        text: "Galerie photo",
        value: false,
        icon: "description"
    },
    {
        text: "Interface admin",
        value: false
    },
    {
        text: "Portfolio",
        value: false,
        icon: "description"
    },
    {
        text: "Agenda",
        value: false,
        icon: "description"
    },
    {
        text: "Blog",
        value: false,
        icon: "description"
    },
    
    {
        text: "Page réservation",
        value: false,
        icon: "description"
    },
    
    
    {
        text: "Charte graphique personnalisée",
        value: false
    },
    {
        text: "Design personnalisé",
        value: false
    },
]
const premiumSpecs = [
    {
        text: "Page d'ccueil",
        value: true,
        icon: "description"
    },
    {
        text: "Page à propos",
        value: true,
        icon: "description"
    },
    {
        text: "Une page pour chacunde vos services",
        value: true,
        icon: "description"
    },
    {
        text: "Page contact",
        value: true,
        icon: "description"
    },
    {
        text: "Thème premium",
        value: true
    },
    {
        text: "Page galerie photo ou portfolio",
        value: true,
        icon: "description"
    },
    {
        text: "Interface admin",
        value: true
    },
    {
        text: "Possibilité d'ajouter d'autre pages (frais en sus)",
        value: true,
        icon: "description"
    }
]

</script>

<style scoped>

</style>