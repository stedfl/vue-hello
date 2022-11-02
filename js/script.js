const {createApp} = Vue;

createApp({
  data() {
    return {
      message: "Ciao",
      name: "",
      classColor: "",
      animal: "canegatto",
      imgPath: "img/",
      extension: ".jpg",
      showText: false,
      showImage: true,
      surprise: "Sorpresa!"
    }
  },
  methods: {
    callAnimal(chosenAnimal) {
      this.animal = chosenAnimal;
    }
  }
}).mount("#app");