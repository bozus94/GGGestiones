Vue.component("cuadre-item", {
	props: {
		cuadre: {
			type: String,
		}
	},
	data() {
		return {
			billetes: "",
			monedas: "",
			pendientes: "",
			total: 0,
			caja: "",
			mensaje: {
				text: "Introduzca los datos",
				bg: 'alert-secondary'
			},
		};
	},
	computed: {
		capitalize() { return this.cuadre.charAt(0).toUpperCase() + this.cuadre.slice(1) },
	},
	methods: {
		calculate() {
			if (this.caja == '' || null) {
				this.mensaje.text = 'La caja no pueder estar vacia';
				this.mensaje.bf = 'alert-info';
				return false;
			}else{
				this.verifyAttributes();

				this.total = parseFloat(this.billetes) + parseFloat(this.monedas) + parseFloat(this.pendientes);
				let diferencia = this.total - this.caja;
				if (this.total < this.caja) {
					this.mensaje.text = `Te faltan ${this.decimales(diferencia)}€`;
					this.mensaje.bg = 'alert-danger'
				}
				if (this.total == this.caja) {
					this.mensaje.text = `Muy bien, Tienes cuadrado!`;
					this.mensaje.bg = 'alert-success'
					
				}
				if (this.total > this.caja) {
					this.mensaje.text = `Muy bien, Tienes cuadrado! y te sobran ${this.decimales(diferencia)}€`;
					this.mensaje.bg = 'alert-success'
				}
			}
		},
		decimales: (number) => Math.abs(number.toFixed(2)),
		verifyAttributes() {

			if (this.billetes === '' || this.billetes === null) {
				this.billetes = 0;
			}
			if (this.monedas === '' || this.monedas === null) {
				this.monedas = 0;
			}
			if (this.pendientes === '' || this.pendientes === null) {
				this.pendientes = 0;
			}
		},
	},
	template: //html
	`<div class="px-4 py-5 my-5 text-center">
		<div class="card boder-light">
			<div class="card-header fs-4 text-center"> {{capitalize}} </div>
			<div class="card-body fs-">
				<div class="row row-cols-2 mx-auto my-3 justify-content-center align-content-center">
					<div class="col-6">
						<div class="form-floating mb-3">
							<input type="text" @keyup="calculate" v-model="caja" class="form-control" placeholder="caja" />
							<label for="caja">Caja</label>
						</div>
					</div>
				</div>
				<div class="row row-cols-2 mx-auto my-3 justify-content-md-center align-content-center">
					<div class="col-4">
						<div class="form-floating mb-3">
							<input type="text" @keyup.="calculate" v-model="billetes" class="form-control" placeholder="billetes" />
							<label for="billetes"> Billetes</label>
						</div>
					</div>
					<div class="col-4">
						<div class="form-floating mb-3">
							<input type="text" @keyup="calculate" v-model="monedas" class="form-control" placeholder="monedas" />
							<label for="monedas"> Monedas</label>
						</div>
					</div>
					<div class="col-4">
						<div class="form-floating mb-3">
							<input typea="text" @keyup="calculate" v-model="pendientes" class="form-control" placeholder="pendientes" />
							<label for="pendientes">Pendientes</label>
						</div>
					</div>
				</div>
			</div>
			<div class="alert text-center fs-5 mb-0" role="alert" :class="[mensaje.bg]">
				{{mensaje.text}}
			</div>
		</div>
		
	</div>`,
});
