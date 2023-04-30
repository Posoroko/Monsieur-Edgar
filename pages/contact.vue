<template>
    <header class="contactHeader">
        <h2 class="contactMainBoxContentTextTitle">
            Contactez-nous
        </h2>
        <p class="contactMainBoxContentTextText">
            Vous avez un projet de site web ?  Vous voulez en savoir plus sur nos services ?  Vous avez une question ?  N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
        </p>
    </header>

    <main class="main contactMain mainWidth flex column gap50">
        <section class="contactMainBox flex justifyCenter">
            <form class="contactForm flex column gap20">
                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="name">
                        Nom
                    </label>
                    <input class="contactFormLineInput" type="text" name="name" id="name">
                </div>

                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="email">
                        Email
                    </label>
                    <input class="contactFormLineInput" type="email" name="email" id="email">
                </div>

                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="email">
                        téléphone
                    </label>
                    <input class="contactFormLineInput" type="email" name="email" id="email">
                </div>

                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="message">
                        Quel est votre projet?
                    </label>
                    <textarea class="contactFormLineInput" name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <div class="contactFormLine flex column alignCenter relative">
                    <p>J'accepte que mes données soient sauvegardées et utilisées pour me recontacter</p>
                    <label class="contactFormLineLabel" for="checkbox">
                        <span class="icon formCheckbox" v-if="formCheckbox" @click="formCheckbox = !formCheckbox">check_box</span>
                        <span class="icon formCheckbox" v-if="!formCheckbox" @click="formCheckbox = !formCheckbox">check_box_outline_blank</span>
                    </label>
                    <input class="hiddenFormCheckbox" id="checkbox" type="checkbox">
                </div>

                <div class="contactFormLine centered">
                    <button class="contactFormLineButton submitButton" @click.prevent>
                        Envoyer
                    </button>
                </div>
            </form>
        </section>

        <section class="flex justifyCenter">
            <div class="contactCard">
                <p>Monsieur Edgar est un service proposé par Studio Posoroko.</p>
                <address class="flex column alignStart gap20">
                    <span class="contactButton flex alignCenter gap20"> <a class="weight7" href="mailto:bonjour@monsieuredgar.com">bonjour@monsieuredgar.com</a></span>
                    
                    <span class="contactButton flex alignCenter gap20"> <a class="weight7" href="call:+33695071264">06 95 07 12 64</a></span>
                    
                    <ul>
                        <li>Studio Posoroko</li>
                        <li>24 rue de Kerven</li>
                        <li>29270 Carhaix-Plouguer</li>
                    </ul>
                </address>
            </div>
        </section>
    </main>
</template>

<script setup>
const formCheckbox = ref(false)
</script>

<style scoped>
.contactForm {
    width: min(90vw, 500px);
}
.contactFormLine {
    
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
}
.contactFormLineLabel {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    padding: 5px 10px;
}
.contactFormLineInput {
    font-size: 18px;
    color: black;
    padding: 10px 15px;
    border: 1px solid #000;
    border-radius: 10px;
}
textarea.contactFormLineInput {
    resize: vertical;
}
.formCheckbox {
    font-size: 30px;
    color: white;
}
.hiddenFormCheckbox {
    position: absolute;
    opacity: 0;
}
.contactCard{
    background-color: var(--bg-secondary);
    padding: 25px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>