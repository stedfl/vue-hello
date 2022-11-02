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
      showText: '',
      showImage: 'true'
    }
  },
  methods: {
    callAnimal(chosenAnimal) {
      this.animal = chosenAnimal;
    }
  }
}).mount("#app");