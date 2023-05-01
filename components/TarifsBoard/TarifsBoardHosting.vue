<template>
    <h1 class="bodyH2 centered marTop50">hébergement</h1>
    <div class="flex justifyCenter alignCenter gap20 marTop20">
        <p>facturation: </p> 
        <p class="button1 centered" :class="{'active' : planType == 'monthly'}" @click="planType = 'monthly'">mensuel</p>
        <p class="button1 centered" :class="{ 'active': planType == 'yearly' }" @click="planType = 'yearly'">annuel</p>
    </div>
    <div class="hostingCardBox marTop20">
        

        <div class="flex justifyCenter gap10 wrap">
            <div class="hostingCard flex column gap10" v-for="plan in plans" :key="plan.id">
                <h1 class="tarifTitle centered">{{  plan.title }}</h1>

                <div class="centered" v-if="planType == 'monthly'">
                    <p> <span class="fS10" v-if="plan.from">à partir de</span> <span class="fS24 weight7">{{ plan.monthly }}</span> €/mois</p>
                    <p>facturé à chaque mois</p>
                </div>

                <div class="centered" v-if="planType == 'yearly'">
                    <p> <span class="fS10" v-if="plan.from">à partir de</span> <span class="fS24 weight7">{{ plan.yearly }}</span> €/mois</p>
                    <p>facturé {{ plan.yearly * 12 }}€ à chaque année</p>
                </div>

                <p class="textAlignCenter " v-if="plan.id > 0">
                    Le prix inclut 5go de stockage pour vos photos.  Si votre site contient des pages supplémentaires, le 
                    prix sera ajusté en conséquence.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const planType = ref('yearly')

const plans = {
    standard: {
        id: 0,
        title: 'Site standard',
        monthly: 15,
        yearly: 12,
        from: false
    },
    premium: {
        id: 1,
        title: 'Site premium',
        monthly:22,
        yearly: 17,
        from: true
    },
    custom: {
        id: 2,
        title: 'Site personnalisé',
        monthly: 15,
        yearly: 12,
        from: true
    }
}

</script>

<style scoped>
.hostingCardBox {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-color-1);
    border-radius: 10px;
}
.hostingCard {
    width: min(90vw, 350px);
    background-color: var(--bg-secondary);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

</style>