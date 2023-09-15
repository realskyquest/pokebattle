<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  export let selected_pokemon;
  let name = selected_pokemon.name;
</script>

<div class="text-bg-dark text-center rounded-2">
  <p>{name}</p>
  <img
    src={selected_pokemon.front_default}
    alt="front of pokemon"
    class="img-fluid pixel"
  />
  <div class="d-grid gap-3">
    <button
      on:click={() => {
        dispatch("choosen", selected_pokemon);
      }}
      data-bs-dismiss="modal"
      type="button"
      class="btn mt-2"
      style="background-color: #4da6ff;">Choose</button
    >
  </div>
</div>

<style>
  .pixel {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
</style>
