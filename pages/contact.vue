<template>
    <header class="contactHeader">
            <h2 class="contactMainBoxContentTextTitle">
                Contactez-nous
            </h2>

            <p class="contactMainBoxContentTextText bodyText">
                Vous avez un projet de site web ?  Vous voulez en savoir plus sur nos services ?  Vous avez une question ?  N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
            </p>
    </header>

    <main class="main contactMain mainWidth flex column gap50">
        <section class="contactMainBox flex justifyCenter">
            
            <form ref="contactForm" class="contactForm flex column gap20">
                

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

                <div class="contactFormLine flex column gap10">
                    <p class="contactFormLineLabel">
                        Comment préférez-vous échanger?
                    </p>

                    <div class="contactChoiceBox flex justifyEvenly">
                        <div class="selectorButton" :class="{ 'active': contactChoice == 'telephone' }" @click.prevent="handleContactChoice('telephone')">
                            téléphone
                        </div>
                
                        <div class="selectorButton" :class="{ 'active': contactChoice == 'sms' }" @click.prevent="handleContactChoice('sms')">
                            sms
                        </div>

                        <div class="selectorButton" :class="{ 'active': contactChoice == 'email' }" @click.prevent="handleContactChoice('email')">
                            email
                        </div>

                    </div>
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
                    <button class="submitButton" @click.prevent>
                        Envoyer
                    </button>
                </div>
                
            </form>
            
        </section>

        <div class="contactSeperator"></div>

        <section class="flex justifyCenter">
            <div class="contactCard">
                <p>Monsieur Edgar est un service proposé par Studio Posoroko.</p>
                <address class="flex column alignStart gap20">
                    <a class="contactButton weight7" href="mailto:bonjour@monsieuredgar.com">bonjour@monsieuredgar.com</a>
                    
                    <a class="contactButton weight7" href="tel:+33695071264">06 95 07 12 64</a>
                    
                    <ul>
                        <li>Studio Posoroko</li>

                        <li>24 rue de Kerven</li>

                        <li>29270 Carhaix-Plouguer</li>
                    </ul>
                </address>

                <p>no siret: 53045413100026</p>
            </div>
        </section>
    </main>
</template>

<script setup>
const formCheckbox = ref(false)

const contactForm = ref(null)

const contactChoice = ref(null)

const handleContactChoice = (choice) => {
    contactChoice.value = choice
}

</script>

<style scoped>
.contactHeader {
    padding: 50px 0;
}
.contactHeader,
.contactForm {
    width: min(90vw, 500px);
    margin: auto;
}
.contactFormLine {
    
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
}
.contactFormLineLabel {
    font-family: 'Quicksand', sans-serif;
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
.contactSeperator {
    width: min(90vw, 500px);
    border: 1px solid var(--bg-secondary);
    margin: auto;
}
.contactChoiceBox *{
    cursor: pointer;
}

.contactChoiceBox div input {
    opacity: 0;
}
</style>