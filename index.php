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
          <button type="button" class="btn btn-light mt-2">Registrar</button>
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
    </div>
  </div>

  <script src="/Resources/js/vueDev.js"></script>
  <script src="/Resources/components/cuadre-item.js"></script>
  <script src="/Resources/js/bootstrap.bundle.min.js"></script>
  <script src="app.js"></script>
</body>

</html>