<template>
  <div class="wrapper">
    <HeaderCross />
    <ContactForm />
    <FooterInfo />
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import ContactForm from "../components/ContactForm.vue";
import FooterInfo from "../components/FooterInfo.vue";

export default {
  components: { HeaderCross, ContactForm, FooterInfo },
};
</script>
