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
import { standardContent,
    premiumContent,
    customContent,
    standardSpecs,
    premiumSpecs,
    customSpecs
} from "@/assets/content/devPlans"

</script>

