<template>
  <div class="box">
    <p>Title : {{ title }}</p>
    <button @click="Change">Change Title</button>
    <LChild :titleCustom="title" @reseted="title = $event"></LChild>
    <RChild></RChild>
  </div>
</template>

<script>
import LChild from "./LChild.vue";
import RChild from "./RChild.vue";

export default {
  name: "Box",
  components: { LChild, RChild },
  data() {
    return {
      title: "Title From Box",
    };
  },
  methods: {
    Change() {
      this.title = "Changed";
    },
  },
};
</script>

<style scoped>
.box {
  width: 80vh;
  height: 80vh;
  background-color: #4b4b4b;
}
</style>
