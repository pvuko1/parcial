export default {
  name: "src-componentes-formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 3,
      nombreLengthMax: 15,
      notaMin: 0,
      notaMax: 10,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
      };
    },

    enviar() {
      console.log({ ...this.formData });
      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
};
