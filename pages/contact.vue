<template>
    <header class="contactHeader">
            <h2 class="contactMainBoxContentTextTitle">
                Contactez nous
            </h2>

            <p class="contactMainBoxContentTextText bodyText">
                Vous avez un projet de site web ?  Vous voulez en savoir plus sur nos services ?  Vous avez une question ?  N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
            </p>
    </header>

    <main class="main contactMain mainWidth flex column gap50">
        <section class="contactMainBox flex justifyCenter">
            
            <form ref="contactForm" class="contactForm flex column gap20 relative">
                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="name">
                        Nom
                    </label>
                    <input class="contactFormLineInput" type="text" name="name" id="name">
                    <div class="centered">
                        <p class="responseText fieldResponseText" v-if="fieldErrors.name">Votre nom doit contenir entre 1 et 50 caractères.</p>
                    </div>
                </div>

                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="email">
                        Email
                    </label>
                    <input class="contactFormLineInput" type="email" name="email" id="email">
                    <div class="centered">
                        <p class="responseText fieldResponseText" v-if="fieldErrors.email">Votre adresse email n'est pas au bon format.</p>
                    </div>
                </div>

                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="phone">
                        Téléphone
                    </label>
                    <input class="contactFormLineInput" type="text" name="phone" id="phone">
                    <div class="centered">
                        <p class="responseText fieldResponseText" v-if="fieldErrors.telephone">Votre numéro de téléphone doit contenir entre 10 et 15 caractères.</p>
                    </div>
                </div>

                <div class="contactFormLine">
                    <label class="contactFormLineLabel" for="message">
                        Quel est votre projet ?
                    </label>
                    <textarea class="contactFormLineInput" name="message" id="message" cols="30" rows="10"></textarea>
                    <div class="centered">
                        <p class="responseText fieldResponseText" v-if="fieldErrors.message">Votre message doit contenir entre 1 et 500 caractères.</p>
                    </div>
                </div>

                <div class="contactFormLine flex column gap10">
                    <p class="contactFormLineLabel">
                        Comment préférez-vous échanger ?
                    </p>

                    <div class="contactPreferenceBox flex justifyEvenly">
                        <div class="selectorButton" :class="{ 'active': contactPreference == 'telephone' }" @click.prevent="handlecontactPreference('telephone')">
                            téléphone
                        </div>
                
                        <div class="selectorButton" :class="{ 'active': contactPreference == 'sms' }" @click.prevent="handlecontactPreference('sms')">
                            sms
                        </div>

                        <div class="selectorButton" :class="{ 'active': contactPreference == 'email' }" @click.prevent="handlecontactPreference('email')">
                            email
                        </div>

                    </div>
                    <div class="centered">
                        <p class="responseText fieldResponseText" v-if="fieldErrors.contactPreference">Veuillez choisir un moyen de contact.</p>
                    </div>
                </div>

                <div class="contactFormLine flex column alignCenter relative">
                    <p>
                        Je consens à ce que ce site stocke mes informations envoyées afin qu’il puisse répondre à ma requête, comme décrit dans les 
                        <NuxtLink class="underline" to="/mentions-legales">
                            mentions légales *
                        </NuxtLink>
                    </p>
                    <label class="contactFormLineLabel" for="checkbox">
                        <span class="icon formCheckbox" v-if="formCheckbox" @click="formCheckbox = !formCheckbox">check_box</span>
                        <span class="icon formCheckbox" v-if="!formCheckbox" @click="formCheckbox = !formCheckbox">check_box_outline_blank</span>
                    </label>
                    <input class="hiddenFormCheckbox" id="checkbox" type="checkbox">
                </div>
                <div class="centered">
                    <p class="responseText fieldResponseText" v-if="fieldErrors.termsAccepted">Veuillez accepter les conditions d'utilisation.</p>
                </div>

                <p class="responseText globalError" v-if="message"> {{ message }} </p>

                <p class="responseText globalError" v-if="error"> {{ error }} </p>

                <div class="contactFormLine centered">
                    <button class="submitButton" @click.prevent="handleSubmit">
                        Envoyer
                    </button>
                </div>
                
                
            </form>
            
        </section>

        <div class="contactSeperator"></div>

        <section class="flex justifyCenter">
            <div class="contactCard flex alignCenter">
                <p>Monsieur Edgar est un service proposé par Studio Posoroko.</p>
                <address class="flex column alignCenter gap20">
                    <a class="contactButton weight7" href="mailto:bonjour@monsieuredgar.com">bonjour@monsieuredgar.com</a>
                    
                    <a class="contactButton weight7" href="tel:+33695071264">06 95 07 12 64</a>
                    
                    <ul class=" flex column alignCenter">
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
const contactPreference = ref(null)
const apiUrl = "https://admin.monsieuredgar.com/Items/Site_mail"
const isPending = ref(false)
const error = ref(null)
const message = ref(null)

const fieldErrors = ref({
    name: false,
    email: false,
    telephone: false,
    message: false,
    contactPreference: false,
    termsAccepted: false
})
const resetFieldErrors = () => {
    fieldErrors.value.name = false
    fieldErrors.value.email = false
    fieldErrors.value.telephone = false
    fieldErrors.value.message = false
    fieldErrors.value.contactPreference = false
    fieldErrors.value.termsAccepted = false
}

const formValidation = (form) => {
    
    let problem = false
    
    if(form.name.length > 50 || !form.name) { 
        fieldErrors.value.name = true
        problem = true
    }
    if (form.email.length > 100 || !form.email) {
        fieldErrors.value.email = true
        problem = true
    }
    if (form.telephone.length > 100 || !form.telephone) {
        fieldErrors.value.telephone = true
        problem = true
    }
    if (form.message.length > 500 || !form.message) {
        fieldErrors.value.message = true
        problem = true
    }
    if (!form.contactPreference) {
        fieldErrors.value.contactPreference = true
        problem = true
    }
    if (!form.termsAccepted) {
        fieldErrors.value.termsAccepted = true
        problem = true
    }
    if(problem) {
        error.value = "Merci de vérifier les champs marqués d'une erreur."
        return false
    }
    console.log('ok form')
    return true
}


const handlecontactPreference = (choice) => {
    contactPreference.value = choice
}
const handleSubmit = async () => {
    resetFieldErrors()
    const formData = {
        name: contactForm.value.name.value,
        email: contactForm.value.email.value,
        telephone: contactForm.value.phone.value,
        message: contactForm.value.message.value,
        contactPreference: contactPreference.value,
        termsAccepted: formCheckbox.value
    }

    if (!formValidation(formData)) {
        return
    }

    isPending.value = true
    error.value = false
  

    const response = await postDataToApi(formData)

    if(response.ok == true) {
        message.value = "Nous avons bien reçu votre message, nous vous recontacterons dans les plus brefs délais."
        
    } else {
        error.value = "Désolé pour l'inconvénient, un problème est survenu. Veuillez réessayer plus tard ou nous contacter par un autre moyen."
    }
    isPending.value = false
}

const postDataToApi = async (data) => {
    const _res = null
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    return response
}

</script>

<style scoped>
.contactHeader {
    padding: 50px 0;
}
.contactHeader,
.contactForm {
    width: min(90vw, 600px);
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
    font-weight: 700;
    color: white;
    background-color: #ffffff1a;
    padding: 10px 15px;
    border: 1px solid var(--border-color-1);
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
    background-color: var(--card-bg);
    padding: 25px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.contactSeperator {
    width: min(90vw, 600px);
    border: 1px solid var(--bg-secondary);
    margin: auto;
}
.contactPreferenceBox *{
    cursor: pointer;
}

.contactPreferenceBox div input {
    opacity: 0;
}
.responseText {
    
    text-align: center;
    padding: 10px;
    border: 1px solid var(--funky-main);
    border-radius: 10px;
}
.fieldResponseText {
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
}
.globalError {
    font-size: 20px;
    font-weight: 700;
}
</style>