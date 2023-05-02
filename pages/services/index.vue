<template>
    <header class="header servicesHeader flex column alignCenter gap20 relative">
        <h1 class="headerMainTitle">Nos Services</h1>
        <p class="headerText smallWidth">
            Que vous ayez besoin d’un service complet ou simplement de conseils, nous sommes à votre écoute pour trouver la solution qui conviendra le mieux à votre projet.
        </p>

        <div class="absolute top0 left0 w100 h100">
            <img src="/images/triangles.svg" class="triangles objectFitCover" alt="">
        </div>
    </header>

    <main class="serviceCardBox shortWidth flex column gap40">
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
        text: "Le web design comprend la conception graphique, la mise en forme et l’organisation du site web.  Un bon design offre aux visiteurs une expérience fluide et agréable. C’est pourquoi nous concevons des designs uniques à partir de composants conçus pour s’adapter à vos besoins et à votre image. Pour des besoins plus précis, nous créons également des designs entièrement personnalisés à l’identité de votre entreprise.",
        icon: "<IconDesign />"
    },
    developpement: {
        id: 2,
        title: "Développement",
        text: "Développer un site web, c’est fabriquer un produit adapté à sa fonction et à la demande du client. Tous nos sites sont codés main, sans recours à des site builders tels que Wordpress. Nous réalisons ainsi des sites, léger, performants et adaptés à tous les écrans. Nous développons votre site à partir de nos propres modèles ou des designs que vous nous proposez.",
        icon: "<IconDesign />"
    },
    hebergement: {
        id: 3,
        title: "Hébergement",
        text: "Pour qu’un site soit visible sur le web, il doit être stocké sur un serveur qui en assurera la distribution. En nous confiant l'hébergement de votre site, vous n'avez aucun entretien à faire. Si vous avez déjà un hébergeur, nous pouvons également nous occuper de la migration de votre site.",
        icon: "<IconDesign />"
    },
    conseil: {
        id: 4,
        title: "Conseil",
        text: "Quels que soient vos besoins, nous sommes à votre écoute pour vous aider à faire les meilleurs choix pour votre projet. Vous n’avez pas encore de site web ? Nous vous conseillons sur le choix de vos photos et sur l’organisation des informations à distribuer sur votre site. Vous avez un site web dysfonctionnel ? Nous pouvons vous aider à trouver les solutions pour l’améliorer et à le réparer.",
        icon: "<IconDesign />"
    }
}

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