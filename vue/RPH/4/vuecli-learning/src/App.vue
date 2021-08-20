<template>
  <base-modal title="New Title" content="Content Modal"></base-modal>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    BaseModal: Modal,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
