<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Bootstrap CSS -->
  <link href="/Resources/css/bootstrap.min.css" rel="stylesheet" />

  <title>Cuadre</title>
</head>

<body>
  <div class="container py-4 m-auto">

    <p class="display-2 mb-4 text-center "> Gestiones </p>

    <!-- App vueJs -->
    <div id="app">

      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-cuadre-tab" data-bs-toggle="tab" data-bs-target="#nav-cuadre" type="button" role="tab" aria-controls="nav-cuadre" aria-selected="true">Cuadre</button>
          <button class="nav-link" id="nav-paquetes-tab" data-bs-toggle="tab" data-bs-target="#nav-paquetes" type="button" role="tab" aria-controls="nav-paquetes" aria-selected="false">Paquetes</button>
          <button class="nav-link" id="nav-lot-prem-tab" data-bs-toggle="tab" data-bs-target="#nav-lot-prem" type="button" role="tab" aria-controls="nav-lot-prem" aria-selected="false">Premios</button>
        </div>
      </nav><!-- nav-categories -->

      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade" id="nav-cuadre" role="tabpanel" aria-labelledby="nav-cuadre-tab" tabindex="0">
          <div class="d-flex align-items-center">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link active " id="v-pills-envios-tab" data-bs-toggle="pill" data-bs-target="#v-pills-envios" type="button" role="tab" aria-controls="v-pills-envios" aria-selected="true">Envios</button>
              <button class="nav-link " id="v-pills-loteria-tab" data-bs-toggle="pill" data-bs-target="#v-pills-loteria" type="button" role="tab" aria-controls="v-pills-loteria" aria-selected="false">Loteria</button>
              <button class="nav-link " id="v-pills-locutorio-tab" data-bs-toggle="pill" data-bs-target="#v-pills-locutorio" type="button" role="tab" aria-controls="v-pills-locutorio" aria-selected="false">Locutorio</button>
            </div>
            <div class="tab-content mx-auto" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-envios" role="tabpanel" aria-labelledby="v-pills-envios-tab">
                <cuadre-item cuadre="Envios"></cuadre-item>
              </div>
              <div class="tab-pane fade" id="v-pills-loteria" role="tabpanel" aria-labelledby="v-pills-loteria-tab">
                <cuadre-item cuadre="Loteria"></cuadre-item>
              </div>
              <div class="tab-pane fade" id="v-pills-locutorio" role="tabpanel" aria-labelledby="v-pills-locutorio-tab">
                <cuadre-item cuadre="Locutorio"></cuadre-item>
              </div>
            </div>
          </div>
        </div> <!-- cuadre -->

        <div class="tab-pane fade show active" id="nav-paquetes" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">

          <form class="row gx-3 gy-2 align-items-center my-4 mx-auto">
            <div class="col-sm-4">
              <label class="visually-hidden" for="specificSizeInputName">Nombre</label>
              <input type="text" class="form-control" id="specificSizeInputName" placeholder="Nombre">
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" class="btn btn-outline-primary py-0 m-0 text-sm-center">Entregar</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" class="btn btn-outline-primary py-0 m-0 text-sm-center">Entregar</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" class="btn btn-outline-primary py-0 m-0 text-sm-center">Entregar</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" class="btn btn-outline-primary py-0 m-0 text-sm-center">Entregar</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" class="btn btn-outline-primary py-0 m-0 text-sm-center">Entregar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div><!-- paquetes -->

        <div class="tab-pane fade" id="nav-lot-prem" role="tabpanel" aria-labelledby="nav-lot-prem-tab" tabindex="0">...</div><!-- lot-pre -->

      </div>
    </div>

    <script src="/Resources/js/vueDev.js"></script>
    <script src="/Resources/components/cuadre-item.js"></script>
    <script src="/Resources/js/bootstrap.min.js"></script>
    <script src="app.js"></script>
</body>

</html>