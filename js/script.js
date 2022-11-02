
// 3. Al click di un bottone nascondere l’immagine e mostrare un testo

const {createApp} = Vue;

createApp({
  data() {
    return {
      message: "Ciao",
      name: "",
      classColor: "",
      animal: "canegatto",
      imgPath: "img/",
      extension: ".jpg"
    }
  },
  methods: {
    callAnimal(chosenAnimal) {
      this.animal = chosenAnimal;
    }
  }
}).mount("#app");