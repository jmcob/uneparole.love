<template>
  <div class="wrapper">
    <div class="cadre">
      <HeaderCross />
      <OfTheMonth />
    </div>
  </div>
</template>

<script>
import HeaderCross from "../components/HeaderCross.vue";
import OfTheMonth from "../components/OfTheMonth.vue";

export default {
  components: { HeaderCross, OfTheMonth },
};
</script>
