const app = Vue.createApp({
  data() {
    template: `<h1>Contact {{ isHello ? teamName : firstName + lastName }}</h1>
    <button v-on:click="onChangeName">Change</button>
    <div class="modal" v-if="isShowModal">
      <h1>Modal content</h1>
    </div>`;
    return {
      teamName: "RHP",
      firstName: "Tung",
      lastName: "Tran",
      isHello: false,
      isShowModal: false,
    };
  },
  methods: {
    onChangeName() {
      this.firstName = "Son";
      this.lastName = "Goku";
      this.isShowModal = !this.isShowModal;
    },
  },
});

app.mount("#contact");
