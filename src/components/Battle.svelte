<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { movesList } from "../libs/moves";
  let dispatch = createEventDispatcher();

  export let selected_pokemonA;
  export let selected_pokemonB;

  let choosingMove = false;
  let moveChoosen = false;
  let battleText = "";

  let mouseEnterMoveInfo = "";
  let moveInfoPower = "";
  let moveInfoAccuracy = "";
  let moveInfoEffect = "";

  // Clones the arrays
  let pokemonA = { ...selected_pokemonA };
  let pokemonB = { ...selected_pokemonB };

  // Shows the stats of each move
  afterUpdate(() => {
    let match = false;
    let index;

    for (let key in movesList) {
      if (movesList[key].name === mouseEnterMoveInfo) {
        match = true;
        index = key;
      }
    }

    if (match == true) {
      moveInfoPower = `Power = ${movesList[index].power}`;
      moveInfoAccuracy = `Accuracy = ${movesList[index].accuracy}`;
      moveInfoEffect = `Effect = ${movesList[index].effect}`;
    } else {
      moveInfoPower = "";
      moveInfoAccuracy = "";
      moveInfoEffect = "";
    }
  });

  function handleEnemyFight() {
    let randomIndex = Math.floor(Math.random() * pokemonB.moves.length);
    let move = movesList[pokemonB.moves[randomIndex]];

    console.log(move);
  }

  function handleFight(moveName) {
    let move = movesList[moveName];
    moveChoosen = true;
    choosingMove = null;

    // Calculate move accuracy
    const hitChance = Math.floor(Math.random() * 100); // Random number between 0 and 99

    if (hitChance > move.accuracy) {
      battleText = `${pokemonA.name}'s ${move.name} missed!`; // MSG when move is missed
    }

    // Damage Algorithm
    let damage = 0;
    let effectivenessMSG = "";

    if (move.power !== "none" && hitChance < move.accuracy) {
      // Calculate type effectiveness
      let effectivenessMultiplier = 1;
      let weaknessFound = false;

      for (let index in pokemonB.weakness) {
        if (pokemonB.weakness[index] == move.type) {
          weaknessFound = true;
        }
      }

      if (weaknessFound == true) {
        effectivenessMSG = ", super effective";
        effectivenessMultiplier *= 2;
      } else {
        effectivenessMSG = ", not very effective";
        effectivenessMultiplier *= 0.5;
      }

      // If attack type and pokemon type matches, set effectiveness to 1
      for (let index in pokemonB.type) {
        if (pokemonB.type[index] == move.type) {
          effectivenessMultiplier = 1;
          effectivenessMSG = "";
        }
      }

      // dmg formula
      damage = Math.floor(
        (((2 * pokemonA.level + 10) / 250) *
          (pokemonA.attack / pokemonA.defense) *
          move.power +
          2) *
          effectivenessMultiplier
      );

      pokemonB.hp -= damage;
      battleText = `${pokemonA.name} used ${move.name}! ${effectivenessMSG}`;

      if (pokemonB.hp <= 0) {
        pokemonB.hp = 0;
        battleText = `${pokemonA.name} used ${move.name}! ${effectivenessMSG}, ${pokemonB.name} has fainted!`;
      }
    } else if (move.power == "none") {
      if (move.effect == "ENEMY ATTACK STAT LOWER") {
        if (pokemonB.attack >= selected_pokemonB.attack / 2) {
          pokemonB.attack -= Math.floor(Math.random() * 3) + 1;
          battleText = `${pokemonA.name} used ${move.name}!, ${pokemonB.name} attack fell!`;
        } else {
          battleText = `${pokemonA.name} used ${move.name}!, ${pokemonB.name} attack won't go lower!`;
        }
      } else if (move.effect == "STEAL HP") {
        let stolenHP = Math.floor(
          (((2 * pokemonA.level + 10) / 250) *
            (pokemonA.attack / pokemonA.defense) *
            pokemonA.attack +
            2) *
            1
        );

        pokemonB.hp -= stolenHP;
        pokemonA.hp += stolenHP;
        battleText = `${pokemonA.name} used ${move.name}!, ${pokemonB.name} was sapped!`;
      }
    }

    // A delay to show results
    setTimeout(() => {
      battleText = "";
      moveChoosen = false;
      choosingMove = false;

      if (pokemonB.hp == 0) {
        dispatch("return");
      }

      // HERE LIES THE ENEMY ATTACK SYSTEM
      handleEnemyFight();
    }, 2000);
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
{:else if choosingMove === true}
  <div class="container-fluid text-center mt-3">
    <div class="row">
      <div class="col p-3 bg-dark text-secondary">
        <div class="d-grid gap-3">
          <button
            on:click={() => {
              handleFight(pokemonA.moves[0]);
            }}
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[0];
            }}
            on:mouseleave={() => {
              mouseEnterMoveInfo = "";
            }}
            type="button"
            class="btn bg-white">{pokemonA.moves[0]}</button
          >
          <button
            on:click={() => {
              handleFight(pokemonA.moves[1]);
            }}
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[1];
            }}
            on:mouseleave={() => {
              mouseEnterMoveInfo = "";
            }}
            type="button"
            class="btn bg-white">{pokemonA.moves[1]}</button
          >
        </div>
      </div>
      <div class="col p-3 bg-dark text-secondary">
        <div class="d-grid gap-3">
          <button
            on:click={() => {
              handleFight(pokemonA.moves[2]);
            }}
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[2];
            }}
            on:mouseleave={() => {
              mouseEnterMoveInfo = "";
            }}
            type="button"
            class="btn bg-white">{pokemonA.moves[2]}</button
          >
          <button
            on:click={() => {
              handleFight(pokemonA.moves[3]);
            }}
            on:mouseenter={() => {
              mouseEnterMoveInfo = pokemonA.moves[3];
            }}
            on:mouseleave={() => {
              mouseEnterMoveInfo = "";
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
{:else if moveChoosen === true}
  <div class="container-fluid text-center bg-dark text-white p-5 mt-3">
    <p class="h5">{battleText}</p>
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
  }
</style>
