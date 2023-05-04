<template>
    <div class="marTop50">
        <h1 class="bodyH2 centered marTop20">Développement</h1>
        <div class="tarifsBoard marTop20 flex justifyCenter gap20 wrap">
            <TarifsBoardCard 
                :title="standardContent.title"
                :from="standardContent.from"
                :price="standardContent.price" 
                :specs="standardSpecs" 
                :topCardText="standardContent.topCardText" />
            <TarifsBoardCard 
                :title="premiumContent.title" 
                :from="premiumContent.from"
                :price="premiumContent.price" 
                :specs="premiumSpecs" 
                :topCardText="premiumContent.topCardText" />

            <TarifsBoardCard 
                :title="customContent.title" 
                :from="customContent.from"
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
    title: "standard",
    from: false,
    price: 750,
    topCardText: "Toutes les pages nécessaires à la présentation de votre activité et de vos services dans une interface claire et ergonomique."
    }
const premiumContent = {
    title: "premium",
    from: true,
    price: 1150,
    topCardText: "Toute l'offre standard plus une page à contenu dynamique de votre choix, et l'accès à un espace administrateur facile d'utilisation.  "
}

const customContent = {
    title: "personnalisé",
    from: true,
    price: 1750,
    topCardText: "L'offre standard (extensible au besoin), un design sur mesure, et des fonctionnalités adaptées à votre activité."
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
        value: true,
        plan: "premium"
    },
    {
        text: "Page à contenu dynamique au choix",
        value: true,
        icon: "description",
        plan: "premium"
    },
    {
        text: "Espace administrateur",
        value: true,
        plan: "premium"
    },
    {
        text: "Possibilité d'ajouter d'autres pages (frais supplémentaires)",
        value: true,
        icon: "description",
        plan: "premium"
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
        icon: "description",
        plan: "custom"
    },
    {
        text: "Logo personnalisé",
        value: true,
        icon: "description",
        plan: "custom"
    },
    {
        text: "Design personnalisé",
        value: true,
        plan: "custom"
    },
    {
        text: "Possibilité d'ajouter d'autres pages (frais supplémentaires)",
        value: true,
        icon: "description",
        plan: "custom"
    }
]
</script>

