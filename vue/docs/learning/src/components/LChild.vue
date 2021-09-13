<template>
  <div class="left">
    <p>From Left : {{ titleCustom }}</p>
    <button @click="Reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: "LChild",
  props: ["titleCustom"],
  methods: {
    Reset() {
      this.titleCustom = "Title From Box";
      this.$emit("reseted", this.titleCustom);
    },
  },
};
</script>

<style scoped>
.left {
  height: 30vh;
  width: 30vh;
  background-color: #ffcccc;
}
</style>
