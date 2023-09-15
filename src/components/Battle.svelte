<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { movesList } from "../libs/moves";
  let dispatch = createEventDispatcher();

  export let selected_pokemonA;
  export let selected_pokemonB;

  let choosingMove = false;

  let mouseEnterMoveInfo = "";
  let moveInfoPower = "";
  let moveInfoAccuracy = "";
  let moveInfoEffect = "";

  let pokemonA = { ...selected_pokemonA };
  let pokemonB = { ...selected_pokemonB };

  afterUpdate(() => {
    for (let key in movesList) {
      if (movesList[key].name === mouseEnterMoveInfo) {
        moveInfoPower = movesList[key].power;
        moveInfoAccuracy = movesList[key].accuracy;
        moveInfoEffect = movesList[key].effect;
      }
    }
  });

  function handleMove(move) {
    // Check if the attacker has the move in their moves list
    if (!pokemonA.moves.includes(move.name)) {
      console.log(`${pokemonA.name} doesn't know ${move.name}.`);
      return;
    }

    // Calculate move damage
    let damage = 0;
    if (move.power !== null) {
      // Calculate damage based on move power, attacker's attack, and defender's defense
      damage = Math.floor(
        (2 *
          pokemonA.level *
          (move.power / 5) *
          (pokemonA.attack / pokemonB.defense)) /
          50 +
          2
      );
    }

    // Apply the damage to the defender's HP
    pokemonB.hp -= damage;

    // Log the move and its damage
    console.log(
      `${pokemonA.name} used ${move.name} and dealt ${damage} damage to ${pokemonB.name}.`
    );

    // Check if the defender's HP has reached zero
    if (pokemonB.hp <= 0) {
      console.log(`${pokemonB.name} fainted!`);
    }

    return damage;
  }
</script>

<div class="container-fluid mt-3">
  <div class="row">
    <div class="col text-white">
      <div class="bg-dark p-1">
        <p>
          {pokemonB.name} Lv {pokemonB.level}<br />
          HP {pokemonB.hp}
        </p>
      </div>
      <div class="land text-center">
        <img
          src={pokemonA.back_default}
          alt="front of pokemon"
          class="img-fluid m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY"
        />
      </div>
    </div>
    <div class="col text-white">
      <div class="land text-center">
        <img
          src={pokemonB.front_default}
          alt="front of pokemon"
          class="img-fluid mt-5 m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY animate__delay-1s"
        />
      </div>
      <div class="bg-dark p-2 mt-2">
        <p>
          {pokemonA.name} Lv {pokemonA.level}<br />
          HP {pokemonA.hp}
        </p>
      </div>
    </div>
  </div>
</div>

{#if choosingMove === false}
  <div class="container-fluid text-center mt-3">
    <div class="row">
      <div class="col p-3 bg-dark text-white">
        <p class="h5 mt-4">What will {pokemonA.name} wil do?</p>
      </div>
      <div class="col p-3 bg-primary text-secondary">
        <div class="d-grid gap-3">
          <button
            on:click={() => {
              choosingMove = true;
            }}
            type="button"
            class="btn bg-white">FIGHT</button
          >
          <button
            on:click={() => {
              dispatch("return");
            }}
            type="button"
            class="btn bg-white">RUN</button
          >
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="container-fluid text-center mt-3">
    <div class="row">
      <div class="col p-3 bg-dark text-secondary">
        <div class="d-grid gap-3">
          <button
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[0];
            }}
            type="button"
            class="btn bg-white">{pokemonA.moves[0]}</button
          >
          <button
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[1];
            }}
            type="button"
            class="btn bg-white">{pokemonA.moves[1]}</button
          >
        </div>
      </div>
      <div class="col p-3 bg-dark text-secondary">
        <div class="d-grid gap-3">
          <button
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[2];
            }}
            type="button"
            class="btn bg-white">{pokemonA.moves[2]}</button
          >
          <button
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[3];
            }}
            type="button"
            class="btn bg-white">{pokemonA.moves[3]}</button
          >
        </div>
      </div>
      <div class="col p-3 bg-primary text-white">
        <p>
          {mouseEnterMoveInfo}<br />
          {moveInfoPower}<br />
          {moveInfoAccuracy}<br />
          {moveInfoEffect}
        </p>
      </div>
    </div>
  </div>
{/if}

<style>
  .pixel {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
  .land {
    background: radial-gradient(
      circle at center bottom,
      #8fde5d 40%,
      transparent 40%
    );
    border-radius: 30%; /* Make the div itself round */
  }
</style>
