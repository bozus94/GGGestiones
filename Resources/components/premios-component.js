Vue.component("premiosComponent", {
  data() {
    return {
      premios: [{ fecha: "10/02/2022", codigo: "73-000000", cantidad: "65€" }],
      total: 65,
    };
  },
  methods: {},
  template: `
    <div class="body-component">
      <form class="row gx-3 gy-2 align-items-center my-4 mx-auto">
        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeInputDate">Fecha</label>
          <input type="text" class="form-control" id="specificSizeInpuDate" placeholder="01/01/2000">
        </div>
        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeInputTicket">No. Ticket</label>
          <input type="text" class="form-control" id="specificSizeInputTicket" placeholder="00-000000">
        </div>
        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeInputPrice">Cantidad</label>
          <input type="text" class="form-control" id="specificSizeInputPrice" placeholder="65">
        </div>

        <div class="col-sm-3">
          <button type="submit" class="btn btn btn-outline-primary">Guardar</button>
        </div>
      </form>

      <div class="table-responsive-xs">
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">No. Ticket</th>
              <th scope="col">Premio</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>01/01/2000</td>
              <td>00-000000</td>
              <td>65$</td>
              <td>
                <button type="button" class="btn btn-outline-success py-0 m-0 text-sm-center">Pagar</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan=2>Total</th>
              <th colspan=2>65€</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `,
});
