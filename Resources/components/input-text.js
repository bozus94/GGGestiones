Vue.component('input-text', {
  props: ['value', ],
  template: `
    <div class="form-floating mb-3">
        <input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" class="form-control" placeholder="monedas" />
        <label for="monedas"> Monedas</label>
    </div>
  `
})