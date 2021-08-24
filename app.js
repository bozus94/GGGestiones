const app = new Vue({
  el: "#app",
  data: {
    envios: {
      billetes: "",
      monedas: "",
      pendientes: "",
      total: 0,
      caja: "",
      mensaje: "Introduzca los datos",
    },
    loteria: {
      billetes: "",
      monedas: "",
      pendientes: "",
      total: 0,
      caja: "",
      mensaje: "Introduzca los datos",
    },
    locutorio: {
      billetes: "",
      monedas: "",
      pendientes: "",
      total: 0,
      caja: "",
      mensaje: "Introduzca los datos",
    },
  },
  mounted() {
    console.log(this.envios.total);
  },
  methods: {
    cuadre: function (object) {
      //  let object = event.target.id;
      console.log(object.total);
      this.object.total = parseFloat(object.billetes) + parseFloat(object.monedas) + parseFloat(object.pendientes);
      let diferencia = object.total - object.caja;
      if (object.total < object.caja) {
        object.mensaje = `Te faltan ${object.decimales(diferencia)}€`;
      }
      if (object.total == object.caja) {
        object.mensaje = `Muy bien, Tienes cuadrado!`;
      }
      if (object.total > object.caja) {
        object.mensaje = `Muy bien, Tienes cuadrado! y te sobran ${object.decimales(diferencia)}€`;
      }
    },
    decimales: function (number) {
      return Math.abs(number.toFixed(2));
    },
  },
});
