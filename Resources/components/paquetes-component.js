Vue.component("packagesComponent", {
  data() {
    return {
      newPackage: {
        name: "",
        company: "",
        type: "",
        date: new Date().toLocaleTimeString(),
      },
      packages: [{ name: "juan gonzalez", company: "seur", type: "bolsa grande", date: "15/10/2022" }],
    };
  },
  methods: {},
  template: `
    <div class="body-component">
      <form class="row gx-3 gy-2 align-items-center my-4 mx-auto">
        <div class="col-sm-4">
          <label class="visually-hidden" for="specificSizeInputName">Nombre</label>
          <input type="text" class="form-control" id="specificSizeInputName" placeholder="Nombre" />
        </div>

        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeSelect">Empresa</label>
          <select class="form-select" id="specificSizeSelect">
            <option selected>Empresa</option>
            <option value="1">Seur</option>
            <option value="2">Gls</option>
          </select>
        </div>

        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeSelect">Paquete</label>
          <select class="form-select" id="specificSizeSelect">
            <option selected>Paquete</option>
            <option value="1">Caja pequeña</option>
            <option value="2">Caja mediana</option>
            <option value="2">Caja grande</option>
            <option value="1">Bolsa pequeña</option>
            <option value="2">Bolsa mediana</option>
            <option value="2">Bolsa grande</option>
            <option value="1">Sobre pequeña</option>
            <option value="2">Sobre mediana</option>
            <option value="2">Sobre grande</option>
          </select>
        </div>

        <div class="col-sm-1">
          <button type="submit" class="btn btn btn-outline-primary">Guardar</button>
        </div>
      </form>

      <div class="table-responsive-xs">
        <table class="table table-hover mt-4 text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Empresa</th>
              <th scope="col">Tipo Paquete</th>
              <th scope="col">Fecha</th>
              <th scope="col"><button type="button" class="btn btn-outline-success py-0 m-0 text-sm-center">Recoger</button></th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="package in packages ">
              <th scope="row">1</th>
              <td>{{ package.name }}</td>
              <td>{{ package.company }}</td>
              <td>{{ package.type }}</td>
              <td>{{ package.date }}</td>
              <td>
                <button type="button" class="btn btn-outline-primary py-0 m-0 text-sm-center">Entregar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
});
