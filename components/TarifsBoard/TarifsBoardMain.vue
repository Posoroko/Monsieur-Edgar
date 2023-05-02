<template>
    <div class="marTop50">
        <h1 class="bodyH2 centered marTop20">développement</h1>
        <div class="tarifsBoard marTop20 flex justifyCenter gap20 wrap">
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

            <TarifsBoardCard 
                :title="customContent.title" 
                :price="customContent.price" 
                :specs="customSpecs" 
                :topCardText="customContent.topCardText" />
        </div>
        
        <TarifsBoardHosting />
</div>
</template>
<style scoped>
.tarifsBoard {
    border: 1px solid var(--border-color-1);
    border-radius: 10px;
    padding: 10px;
}
</style>

<script setup>

const standardContent = {
    title: "Site standard",
    price: 750,
    topCardText: "Toutes les pages nécessaires à la présentation de votre activité et de vos services dans une interface claire et ergonomique."
    }
const premiumContent = {
    title: "Site premium",
    price: 1150,
    topCardText: "Les pages de vtre choix pour la promotion de votre activité, ainsi qu'un espace administrateur facile d'utilisation.  "
}

const customContent = {
    title: "Site personnalisé",
    price: 1750,
    topCardText: "Vous avez des besoins spécifiques ? Toutes les pages de votre choix, un espace administrateur ainsi qu'une charte graphique à l'image de votre entreprise."
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
        text: "Une page par service",
        value: true,
        icon: "description"
    },
    {
        text: "Page contact",
        value: true,
        icon: "description"
    },
    {
        text: "Modèle standard au choix",
        value: true
    },
    {
        text: "Galerie photo",
        value: false,
        icon: "description"
    },
    {
        text: "Espace administrateur",
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
        text: "Une page par service",
        value: true,
        icon: "description"
    },
    {
        text: "Page contact",
        value: true,
        icon: "description"
    },
    {
        text: "Modèle premium au choix",
        value: true
    },
    {
        text: "Page galerie photo ou portfolio",
        value: true,
        icon: "description"
    },
    {
        text: "Espace administrateur",
        value: true
    },
    {
        text: "Possibilité d'ajouter d'autres pages (frais supplémentaires)",
        value: true,
        icon: "description"
    }
]
const customSpecs = [
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
        text: "Une page par service",
        value: true,
        icon: "description"
    },
    {
        text: "Page contact",
        value: true,
        icon: "description"
    },
    {
        text: "Charte graphique personnalisée",
        value: true,
        icon: "description"
    },
    {
        text: "Logo personnalisé",
        value: true,
        icon: "description"
    },
    {
        text: "Design personnalisé",
        value: true
    },
    {
        text: "Espace administrateur",
        value: true
    },
    {
        text: "Possibilité d'ajouter d'autres pages (frais supplémentaires)",
        value: true,
        icon: "description"
    },
    {
        text: "quoi de plus ?",
        value: true,
        icon: "description"
    }
]
</script>

