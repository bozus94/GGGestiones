Vue.component("cuadre", {
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
	template: //html
	`<div class="px-4 py-5 my-5 text-center">
			<h1 class="display-5 fw-bold">{{type.charAt(0).toUpperCase() + type.slice(1)}}</h1>
			<div class="row row-cols-2 mx-auto my-3 justify-content-center">
				<div class="col-6">
					<div class="form-floating mb-3">
						<input type="text" v-model="caja" class="form-control" placeholder="caja" />
						<label for="caja">Caja</label>
					</div>
				</div>
			</div>
			<div class="row row-cols-2 mx-auto my-3 justify-content-md-center">
				<div class="col-4">
					<div class="form-floating mb-3">
						<input type="text" v-model="billetes" class="form-control" placeholder="billetes" />
						<label for="billetes"> Billetes</label>
					</div>
				</div>
				<div class="col-4">
					<div class="form-floating mb-3">
						<input type="text" v-model="monedas" class="form-control" placeholder="monedas" />
						<label for="monedas"> Monedas</label>
					</div>
				</div>
				<div class="col-4">
					<div class="form-floating mb-3">
						<input type="text" v-model="pendientes" class="form-control" placeholder="pendientes" />
						<label for="pendientes">Pendientes</label>
					</div>
				</div>
			</div>
			<div class="btn-group mb-4" role="group" aria-label="Button group with nested dropdown">
				<button type="button" class="btn btn-primary" @click="cuadre">Cuadrar</button>
			</div>
			<p class="mx-5 display-6 mx-auto">{{mensaje}}</p>
		</div>`,
	props: ["type"],
	computed: {	
		capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
	},
	methods: {
		cuadre() {
			/* for (let property in data) {
				if (property === '' || property === null) {
					property = 0;
				}
			} */
			this.total = parseFloat(this.billetes) + parseFloat(this.monedas) + parseFloat(this.pendientes);
			let diferencia = this.total - this.caja;
			if (this.total < this.caja) {
				this.mensaje = `Te faltan ${this.decimales(diferencia)}€`;
			}
			if (this.total == this.caja) {
				this.mensaje = `Muy bien, Tienes cuadrado!`;
			}
			if (this.total > this.caja) {
				this.mensaje = `Muy bien, Tienes cuadrado! y te sobran ${this.decimales(diferencia)}€`;
			}
		},
		decimales: (number) => Math.abs(number.toFixed(2)),
	},
});
