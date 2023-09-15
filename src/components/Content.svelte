<script>
  import { pokemonList } from "../libs/pokemons.js";
  import Battle from "./Battle.svelte";
  import PokeInfoDisplay from "./PokeInfoDisplay.svelte";
  import PokeInfoChoose from "./PokeInfoChoose.svelte";

  let battleStarted = false;

  let pokemonA = null;
  let pokemonB = null;

  pokemonA = pokemonList[0];
  pokemonB = pokemonList[1];
</script>

{#if battleStarted === false}
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-sm-3 p-3 bg-primary text-white">
        <PokeInfoDisplay selected_pokemon={pokemonA} />
      </div>

      <div class="col p-3 bg-dark text-white">
        <div class="text-center">
          <p class="h1 mt-5">VS</p>
          <button
            on:click={() => {
              battleStarted = true;
            }}
            type="button"
            class="btn mt-5"
            style="background-color: #eb564b;">BATTLE!</button
          >
          <div class="d-grid gap-3 mt-5">
            <button
              data-bs-toggle="modal"
              data-bs-target="#choosePokemonA"
              type="button"
              class="btn mt-2"
              style="background-color: #4da6ff;">Change {pokemonA.name}!</button
            >
            <button
              data-bs-toggle="modal"
              data-bs-target="#choosePokemonB"
              type="button"
              class="btn mt-2"
              style="background-color: #4da6ff;">Change {pokemonB.name}!</button
            >
          </div>
        </div>
      </div>
      <div class="col-sm-3 p-3 bg-primary text-white">
        <PokeInfoDisplay selected_pokemon={pokemonB} />
      </div>
    </div>
  </div>
{:else}
  <Battle
    on:return={() => {
      battleStarted = false;
    }}
    selected_pokemonA={pokemonA}
    selected_pokemonB={pokemonB}
  />
{/if}

<!-- Popups down here -->

<div class="modal" id="choosePokemonA">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Pokemon Selector</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" />
      </div>

      <div class="modal-body">
        {#each pokemonList as pokemon}
          <PokeInfoChoose
            on:choosen={(event) => {
              pokemonA = event.detail;
            }}
            selected_pokemon={pokemon}
          />
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="modal" id="choosePokemonB">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Pokemon Selector</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" />
      </div>

      <div class="modal-body">
        {#each pokemonList as pokemon}
          <PokeInfoChoose
            on:choosen={(event) => {
              pokemonB = event.detail;
            }}
            selected_pokemon={pokemon}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
