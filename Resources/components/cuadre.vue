<template>
  <!-- envios -->
  <div
    class="tab-pane fade show active"
    id="v-pills-envios"
    role="tabpanel"
    aria-labelledby="v-pills-envios-tab"
  >
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">Envios</h1>
      <div class="row row-cols-2 mx-auto my-3 justify-content-center">
        <div class="col-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              v-model="caja"
              class="form-control"
              id="caja"
              placeholder="caja"
            />
            <label for="caja">Caja</label>
          </div>
        </div>
      </div>
      <div class="row row-cols-2 mx-auto my-3 justify-content-md-center">
        <div class="col-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              v-model="billetes"
              class="form-control"
              id="billetes"
              placeholder="billetes"
            />
            <label for="billetes"> Billetes</label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              v-model="monedas"
              class="form-control"
              id="monedas"
              placeholder="monedas"
            />
            <label for="monedas"> Monedas</label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              v-model="pendientes"
              class="form-control"
              id="pendientes"
              placeholder="pendientes"
            />
            <label for="pendientes">Pendientes</label>
          </div>
        </div>
      </div>
      <div class="d-flex align-content-center justify-content-center">
        <button
          type="button"
          v-on:click="cuadre('envios')"
          class="btn btn-primary btn-sm px-5"
          id="envios"
        >
          Cuadrar
        </button>
        <p class="mx-5 display-6">{{ mensaje }}</p>
      </div>
    </div>
  </div>
  <!-- envios -->
</template>

<script>
export default {
  data() {
    return {
      billetes: "",
      monedas: "",
      pendientes: "",
      total: 0,
      caja: "",
      mensaje: "Introduzca los datos",
    };
  },
  props: []
  methods: {
    cuadre: function () {
      this.this.total =
        parseFloat(this.billetes) +
        parseFloat(this.monedas) +
        parseFloat(this.pendientes);
      let diferencia = this.total - this.caja;
      if (this.total < this.caja) {
        this.mensaje = `Te faltan ${this.decimales(diferencia)}€`;
      }
      if (this.total == this.caja) {
        this.mensaje = `Muy bien, Tienes cuadrado!`;
      }
      if (this.total > this.caja) {
        this.mensaje = `Muy bien, Tienes cuadrado! y te sobran ${this.decimales(
          diferencia
        )}€`;
      }
    },
    decimales: function (number) {
      return Math.abs(number.toFixed(2));
    },
  },
};
</script>
