Vue.component("cuadre-item", {
	props: {
		cuadre: {
			type: String,
		}
	},
	created() {
		console.log(`cuadre${this.cuadre}`);
		const data = JSON.parse(localStorage.getItem(`cuadre${this.cuadre}`));
		if (data !== null) {
			this.datas = data;
		}
	},
	data() {
		return {
			datas: {
				billetes: "", 
				monedas: "",
				pendientes: "",
				total: 0,
				caja: "",
				mensaje: {
					text: "Introduzca los datos",
					bg: 'alert-secondary'
				},
			}
		};
	},
	computed: {
		capitalize() { return this.cuadre.charAt(0).toUpperCase() + this.cuadre.slice(1) },
	},
	methods: {
		calculate() {
			if (this.datas.caja == '' || null) {
				this.datas.mensaje.text = 'La caja no pueder estar vacia';
				this.datas.mensaje.bg = 'alert-secondary';
				return false;
			} else if(this.datas.caja === 0 || this.datas.caja === '0') {
				this.datas.mensaje.text = 'La caja no puede ser igual al 0'
				this.datas.mensaje.bg = 'alert-secondary'
			} else{	
				this.verifyAttributes();
				localStorage.setItem(`cuadre${this.cuadre}`, JSON.stringify(this.datas))

				this.datas.total = parseFloat(this.datas.billetes) + parseFloat(this.datas.monedas) + parseFloat(this.datas.pendientes);
				let diferencia = this.datas.total - this.datas.caja;
				if (this.datas.total < this.datas.caja) {
					this.datas.mensaje.text = `Te faltan ${this.decimales(diferencia)}€`;
					this.datas.mensaje.bg = 'alert-danger'
				}
				if (this.datas.total == this.datas.caja) {
					this.datas.mensaje.text = `Cuadre correcto`;
					this.datas.mensaje.bg = 'alert-success'
					
				}
				if (this.datas.total > this.datas.caja) {
					this.datas.mensaje.text = `Sobran ${this.decimales(diferencia)}€`;
					this.datas.mensaje.bg = 'alert-primary'
				}
			}
			
		},
		decimales: (number) => Math.abs(number.toFixed(2)),
		verifyAttributes() {
			if (this.datas.billetes === '' || this.datas.billetes === null) {
				this.datas.billetes = 0;
			}
			if (this.datas.monedas === '' || this.datas.monedas === null) {
				this.datas.monedas = 0;
			}
			if (this.datas.pendientes === '' || this.datas.pendientes === null) {
				this.datas.pendientes = 0;
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
							<input type="text" @keyup="calculate" v-model="datas.caja" class="form-control" placeholder="caja" />
							<label for="caja">Caja</label>
						</div>
					</div>
				</div>
				<div class="row row-cols-2 mx-auto my-3 justify-content-md-center align-content-center">
					<div class="col-4">
						<div class="form-floating mb-3">
							<input type="text" @keyup="calculate" v-model="datas.billetes" class="form-control" placeholder="billetes" />
							<label for="billetes"> Billetes</label>
						</div>
					</div>
					<div class="col-4">
						<div class="form-floating mb-3">
							<input type="text" @keyup="calculate" v-model="datas.monedas" class="form-control" placeholder="monedas" />
							<label for="monedas"> Monedas</label>
						</div>
					</div>
					<div class="col-4">
						<div class="form-floating mb-3">
							<input typea="text" @keyup="calculate" v-model="datas.pendientes" class="form-control" placeholder="pendientes" />
							<label for="pendientes">Pendientes</label>
						</div>
					</div>
				</div>
			</div>
			<div class="alert text-center fs-5 mb-0" role="alert" :class="[datas.mensaje.bg]">
				{{datas.mensaje.text}}
			</div>
		</div>
		
	</div>`,
});
