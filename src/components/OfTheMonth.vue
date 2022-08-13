<template>
  <p id="about">
    En ce mois d'août, nous lisons "Le Magnificat" dans l'évangile de saint Luc
    au premier chapitre :
  </p>
  <div id="uneparole">
    <p>{{ uneparole.parole }}</p>
    <p class="ref">
      <em>{{ uneparole.ref }}</em>
    </p>
  </div>
</template>

<script>
import paroles from "../json/paroles-du-mois.json";

export default {
  data() {
    return {
      uneparole: paroles[0],
    };
  },
};
</script>
