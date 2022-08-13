<template>
  <div class="hello">
    <div class="cadre">
      <h2>Soumettre une parole de Dieu</h2>
      <p>
        Si vous désirez soumettre une parole sur uneparole.love, remplissez ce
        formulaire !
        <br />Que Dieu vous bénisse !
      </p>

      <form ref="form" @submit.prevent="sendEmail">
        <label>Nom</label>
        <input type="text" v-model="name" name="name" placeholder="Votre nom" />
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Votre e-mail"
        />
        <label>Passage biblique (avec références si possible)</label>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Passage"
        >
        </textarea>

        <input type="submit" :value="send" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      send: "Envoyer",
      sent: false,
    };
  },
  methods: {
    sendEmail(e) {
      let button = document.getElementsByTagName("input")[2];
      try {
        if (this.sent) {
          this.send = "Pour envoyer un message à nouveau, rechargez la page";
          button.style.backgroundColor = "#6a0dad";
          return;
        }
        emailjs.sendForm(
          "service_ym069uf",
          "template_xqvi34c",
          e.target,
          "8teXph77JJiHSkBju",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
      this.send = "Merci pour votre message, il est transmis";
      this.sent = true;
      button.style.backgroundColor = "#4caf50";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

label {
  float: left;
}
.cadre {
  padding-bottom: 20px;
  background-color: white;
  border-radius: 10px;
  font-family: "Karla", sans-serif;
}
label,
p,
form,
h2 {
  background-color: white;
  color: black;
}

input {
  background-color: #fff;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  background-color: #fff;
}

input[type="submit"] {
  background-color: midnightblue;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: midnightblue;
}
</style>
