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
    <!-- App vueJs -->
    <div id="app">
      <div class="d-flex align-items-center">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-envios-tab" data-bs-toggle="pill" data-bs-target="#v-pills-envios" type="button" role="tab" aria-controls="v-pills-envios" aria-selected="true">Envios</button>
          <button class="nav-link" id="v-pills-loteria-tab" data-bs-toggle="pill" data-bs-target="#v-pills-loteria" type="button" role="tab" aria-controls="v-pills-loteria" aria-selected="false">Loteria</button>
          <button class="nav-link" id="v-pills-locutorio-tab" data-bs-toggle="pill" data-bs-target="#v-pills-locutorio" type="button" role="tab" aria-controls="v-pills-locutorio" aria-selected="false">Locutorio</button>
        </div>
        <div class="tab-content mx-auto" id="v-pills-tabContent">

          <!-- envios -->
          <div class="tab-pane fade show active" id="v-pills-envios" role="tabpanel" aria-labelledby="v-pills-envios-tab">
            <div class="px-4 py-5 my-5 text-center">
              <h1 class="display-5 fw-bold">Envios</h1>
              <div class="row row-cols-2 mx-auto my-3 justify-content-center">
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input type="text" v-model="envios.caja" class="form-control" id="caja" placeholder="caja" />
                    <label for="caja">Caja</label>
                  </div>
                </div>
              </div>
              <div class="row row-cols-2 mx-auto my-3 justify-content-md-center">
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input type="text" v-model="envios.billetes" class="form-control" id="billetes" placeholder="billetes" />
                    <label for="billetes"> Billetes</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input type="text" v-model="envios.monedas" class="form-control" id="monedas" placeholder="monedas" />
                    <label for="monedas"> Monedas</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input type="text" v-model="envios.pendientes" class="form-control" id="pendientes" placeholder="pendientes" />
                    <label for="pendientes">Pendientes</label>
                  </div>
                </div>
              </div>
              <div class="d-flex align-content-center justify-content-center">
                <button type="button" v-on:click="cuadre('envios')" class="btn btn-primary btn-sm px-5" id="envios">Cuadrar</button>
                <p class="mx-5 display-6">{{envios.mensaje}}</p>
              </div>
            </div>
          </div> <!-- envios -->


          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
      </div>

      <pre>
      {{$data}}
      </pre>
    </div>
    <div>
    </div>
  </div>

  <script src="/Resources/js/vueDev.js"></script>
  <script src="/Resources/js/bootstrap.bundle.min.js"></script>
  <script src="app.js"></script>
</body>

</html>