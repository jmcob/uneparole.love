<template>
  <div class="wrapper">
    <HeaderCross />
    <ContactForm />
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: { HeaderCross, ContactForm },
};
</script>
