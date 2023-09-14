<script>
  import { pokemonList } from "../libs/pokemon";
  import PokeInfoDisplay from "./PokeInfoDisplay.svelte";

  let pokemonA = null;
  let pokemonB = null;

  pokemonA = pokemonList[0];
  pokemonB = pokemonList[1];
</script>

<div class="container mt-5 text-center">
  <div class="row">
    <div class="col">
      <PokeInfoDisplay selected_pokemon={pokemonA} />
    </div>
    <div class="col">
      <hr class="p-5" />
      <p class="h5">VS</p>
      <div class="d-grid gap-3">
        <button
          type="button"
          class="btn mt-5"
          style="background-color: #eb564b;">BATTLE!</button
        >
        <button
          data-bs-toggle="modal"
          data-bs-target="#choosePokemon"
          type="button"
          class="btn mt-5"
          style="background-color: #4da6ff;">Change {pokemonA.name}!</button
        >
        <button
          data-bs-toggle="modal"
          data-bs-target="#choosePokemon"
          type="button"
          class="btn mt-2"
          style="background-color: #4da6ff;">Change {pokemonB.name}!</button
        >
      </div>
    </div>
    <div class="col">
      <PokeInfoDisplay selected_pokemon={pokemonB} />
    </div>
  </div>
</div>

<div class="modal" id="choosePokemon">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Pokemon Selector</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" />
      </div>

      <div class="modal-body">
        <p>OWO</p>
      </div>
    </div>
  </div>
</div>
