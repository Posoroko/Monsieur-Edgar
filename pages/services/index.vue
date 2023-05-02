<template>
    <header class="header servicesHeader">
        <h1>Nos Services</h1>
        <p class="headerText">
            Que vous ayez besoin d’un service complet ou simplement de conseils, nous sommes à votre écoute pour trouver la solution qui conviendra le mieux à votre projet.

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
        text: "Le web design comprend la conception graphique, la mise en forme et l’organisation d’un site web dans le but d’offrir à l’utilisateur une expérience agréable et réussie. Chez Monsieur Edgar, la première impression que votre clientèle se fait de votre activité est notre priorité. C’est pourquoi nous concevons des designs uniques à partir de composants conçus pour s’adapter à vos besoins et à votre image. Pour des besoins plus précis, nous créons également des designs entièrement personnalisables à l’identité de votre entreprise.",
        icon: "<IconDesign />"
    },
    developpement: {
        id: 2,
        title: "Développement",
        text: "Développer un site web, c’est fabriquer un produit adapté à sa fonction et à la demande du client. Tous nos sites sont codés main, sans recours à des site builders tels que Wordpress. Nous réalisons des sites simples, flexibles et performants, adaptés à tous les écrans, et que nous entretenons nous-mêmes. Nous développons votre site à partir de nos propres modèles ou des designs que vous nous proposez.",
        icon: "<IconDesign />"
    },
    hebergement: {
        id: 3,
        title: "Hébergement",
        text: "Pour qu’un site soit visible sur le web, il doit être stocké sur un serveur qui en assurera la sécurité. Si vous le souhaitez, Monsieur Edgar peut s'occuper d’héberger votre site web pour vous, sur des serveurs modernes et sécuritaires, afin d’en garantir des mises à jour rapides, réactives, et sans recours à un tiers.",
        icon: "<IconDesign />"
    },
    conseil: {
        id: 4,
        title: "Conseil",
        text: "Notre priorité est de vous conseiller. Quels que soient vos besoins, nous sommes à votre écoute pour vous aider à les identifier afin de faire les meilleurs choix pour votre projet. Vous n’avez pas encore de site web ? Nous vous conseillons sur le choix de vos photos et sur l’organisation des informations à distribuer sur votre site afin de mettre en valeur l’image de votre entreprise.Vous avez un site web dysfonctionnel ? Nous l’améliorons ou pour vous ou le réparons.",
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