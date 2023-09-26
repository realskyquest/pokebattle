<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  import { movesList } from "../libs/moves";
  import { transition_in } from "svelte/internal";
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

  // Effects
  let pokemonAEffects = {
    BURN: false,
    SEEDED: false,
  };
  let pokemonBEffects = {
    BURN: false,
    SEEDED: false,
  };

  // Effects, Flash and dead, hit
  let hitAnim = false;

  let Aeffects = "";
  let Beffects = "";

  let Aanim = "";
  let Banim = "";

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

    Aeffects = "";
    Beffects = "";
    if (pokemonAEffects.BURN == true) {
      Aeffects += "BURN ";
    }
    if (pokemonAEffects.SEEDED == true) {
      Aeffects += "SEEDED ";
    }
    if (pokemonBEffects.BURN == true) {
      Beffects += "BURN ";
    }
    if (pokemonBEffects.SEEDED == true) {
      Beffects += "SEEDED ";
    }
  });

  // Handles the moves
  function handleMove(moveName, team) {
    let user;
    let target;

    let selectedUser;
    let selectedTarget;

    // For special effects
    let TargetEffects;

    // Setups the user and target
    if (team == "friend") {
      user = pokemonA;
      target = pokemonB;
      selectedUser = selected_pokemonA;
      selectedTarget = selected_pokemonB;
      TargetEffects = pokemonBEffects;
    } else {
      user = pokemonB;
      target = pokemonA;
      selectedUser = selected_pokemonB;
      selectedTarget = selected_pokemonA;
      TargetEffects = pokemonAEffects;
    }

    //--------------------

    let move = movesList[moveName];
    const hitChance = Math.floor(Math.random() * 100); // Random number between 0 to 99

    let effectivenessMultiplier = 1;
    let effectivenessMSG = "";
    let weaknessFound = false;

    // Check if the move is super effective
    for (let index in target.weakness) {
      if (target.weakness[index] == move.type) {
        weaknessFound = true;
      }
    }

    // Super effective
    if (weaknessFound == true) {
      effectivenessMSG = ", super effective";
      effectivenessMultiplier = 2;
    } else {
      effectivenessMSG = "";
      effectivenessMultiplier = 1;
    }

    // Not very effective
    for (let index in target.type) {
      if (target.type[index] == move.type) {
        effectivenessMSG = ", not very effective";
        effectivenessMultiplier = 0.5;
      }
    }

    if (hitChance > move.accuracy) {
      // Missed
      battleText = `${user.name}'s ${move.name} missed!`;
    } else {
      // Hit

      let damage = 0;

      if (move.power !== "none") {
        // Calculates total damage
        damage = Math.floor(
          (((2 * user.level + 10) / 250) *
            (user.attack / target.defense) *
            move.power +
            2) *
            effectivenessMultiplier
        );

        target.hp -= damage;
        battleText = `${user.name} used ${move.name}! ${effectivenessMSG}`;
        hitAnim = true;
      }
    }

    //---------- Effects
    let mayChance = Math.floor(Math.random() * 100);

    // Hit chance effects
    if (hitChance < move.accuracy) {
      // Effect stats
      if (move.effect == "USER DEFENSE STAT RAISE") {
        if (user.defense < Math.floor(selectedUser.defense * 1.5)) {
          let effectValue = Math.floor(selectedUser.defense * (1 / 8) * 1);
          user.defense += effectValue;
          battleText = `${user.name} used ${move.name}, ${user.name} defense rose!`;
        } else {
          user.defense = Math.floor(selectedUser.defense * 1.5);
          battleText = `${user.name} used ${move.name}!, ${user.name} defense won't go higher!`;
        }
      } else if (move.effect == "ENEMY ATTACK STAT LOWER") {
        if (target.attack > Math.floor(selectedTarget.attack / 2)) {
          let effectValue = Math.floor(selectedTarget.attack * (1 / 8) * 1);
          target.attack -= effectValue;
          battleText = `${user.name} used ${move.name}, ${target.name} attack fell!`;
        } else {
          target.attack = Math.floor(selectedTarget.attack / 2);
          battleText = `${user.name} used ${move.name}!, ${target.name} attack won't go lower!`;
        }
      } else if (move.effect == "ENEMY DEFENSE STAT LOWER") {
        if (target.defense > Math.floor(selectedTarget.defense / 2)) {
          let effectValue = Math.floor(selectedTarget.defense * (1 / 8) * 1);
          target.defense -= effectValue;
          battleText = `${user.name} used ${move.name}, ${target.name} defense fell!`;
        } else {
          target.defense = Math.floor(selectedTarget.defense / 2);
          battleText = `${user.name} used ${move.name}!, ${target.name} defense won't go lower!`;
        }
        // Special effects
      } else if (move.effect == "SEEDED") {
        TargetEffects.SEEDED = true;
        battleText = `${user.name} used ${move.name}, ${target.name} was SEEDED`;
      }
    }

    // May chance effects
    if (mayChance > 85) {
      // May effect stats
      if (move.effect == "MAY USER ATTACK STAT RISE") {
        if (user.attack < Math.floor(selectedUser.attack * 1.5)) {
          let effectValue = Math.floor(selectedUser.attack * (1 / 8) * 1);
          user.attack += effectValue;
          battleText = `${user.name} used ${move.name}, ${user.name} attack rose!`;
        } else {
          user.attack = Math.floor(selectedUser.attack * 1.5);
          battleText = `${user.name} used ${move.name}!, ${user.name} attact won't go higher!`;
        }
      } else if (move.effect == "MAY ENEMY SPEED STAT LOWER") {
        if (target.speed > Math.floor(selectedTarget.speed / 2)) {
          let effectValue = Math.floor(selectedTarget.speed * (1 / 8) * 1);
          target.speed -= effectValue;
          battleText = `${user.name} used ${move.name}, ${target.name} speed fell!`;
        } else {
          target.speed = Math.floor(selectedTarget.speed / 2);
          battleText = `${user.name} used ${move.name}!, ${target.name} speed won't go lower!`;
        }
        // May special effects
      } else if (move.effect == "MAY BURN") {
        TargetEffects.BURN = true;
      }
    }

    // Handle special effects
    if (TargetEffects.SEEDED == true) {
      battleText += `, ${target.name} was sapped!`;
      let damage = Math.floor(
        selectedTarget.hp * (1 / 8) * effectivenessMultiplier
      );

      target.hp -= damage;
      user.hp += damage;
      if (user.hp >= selectedUser.hp) {
        user.hp = selectedUser.hp;
      }
    }
    if (TargetEffects.BURN == true) {
      battleText += `, ${target.name} is hurt by its burn!`;
      let damage = Math.floor(
        selectedTarget.hp * (1 / 8) * effectivenessMultiplier
      );
      target.hp -= damage;
    }
    //---------- END

    // Resets health to zero if fainted
    if (target.hp <= 0) {
      target.hp = 0;
    }

    //--------------------

    // Updates the variables
    if (team == "friend") {
      pokemonA = { ...user };
      pokemonB = { ...target };
    } else {
      pokemonA = { ...target };
      pokemonB = { ...user };
    }
  }

  function enemyAI_3() {
    const validMoves = pokemonB.moves.filter((moveName) => {
      const move = movesList[moveName];

      // super effective
      if (pokemonA.weakness.includes(move.type)) {
        return true;
      }

      // not very effective
      if (pokemonB.type.includes(move.type)) {
        return true;
      }

      // normal
      return false;
    });

    // There no type moves, choose a random move
    if (validMoves.length === 0) {
      return enemyAI_2();
    }

    // Choose a random move from the valid moves
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    const selectedMove = movesList[validMoves[randomIndex]];

    return selectedMove;
  }

  function enemyAI_2() {
    // random move
    let randomMoveIndex = Math.floor(Math.random() * pokemonB.moves.length);
    let randomMove = movesList[pokemonB.moves[randomMoveIndex]];
    return randomMove;
  }

  function enemyAI_1() {
    const validMoves = pokemonB.moves.filter((moveName) => {
      const move = movesList[moveName];
      return move.power === "none" && move.effect !== "none";
    });

    // There are no effect moves, choose a random move
    if (validMoves.length === 0) {
      return enemyAI_2();
    }

    // Choose a random move from the valid moves
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    const selectedMove = movesList[validMoves[randomIndex]];

    return selectedMove;
  }

  function enemyAI() {
    if (pokemonB.hp > Math.floor(selected_pokemonB.hp * 0.75)) {
      // HP is over 75%
      return enemyAI_1();
    } else if (pokemonB.hp > Math.floor(selected_pokemonB.hp * 0.5)) {
      // HP is over 50% but not 75%
      return enemyAI_2();
    } else {
      // HP is 50% or lower
      return enemyAI_3();
    }
  }

  // Handles the fight
  function handleFight(moveName) {
    moveChoosen = true;
    choosingMove = null;

    handleMove(moveName, "friend");
    if (hitAnim == true) {
      hitAnim = false;
      Banim = "animate__flash";
    }

    setTimeout(() => {
      let enemyMove = enemyAI();
      console.log(enemyMove.name);
      handleMove(enemyMove.name, "enemy");

      if (hitAnim == true) {
        hitAnim = false;
        Aanim = "animate__flash";
      }

      // fainted?
      let fainted = false;

      // Check if fainted
      if (pokemonB.hp == 0) {
        // Enemy
        battleText = `${pokemonB.name} has fainted!`;
        fainted = true;
        Aanim = "";
        Banim = "animate__zoomOut animate__slower";
      } else if (pokemonA.hp == 0) {
        // Friend
        battleText = `${pokemonB.name} used ${enemyMove.name}!, ${pokemonA.name} has fainted!`;
        fainted = true;
        Aanim = "animate__zoomOut animate__slower";
        Banim = "";
      }

      if (fainted == false) {
        setTimeout(() => {
          Aanim = "";
          Banim = "";
          battleText = "";
          moveChoosen = false;
          choosingMove = false;
        }, 2500);
      } else {
        setTimeout(() => {
          setTimeout(() => {
            // Add more stuff for death OWO
            dispatch("return");
          }, 2500);
        }, 2500);
      }
    }, 2500);
  }
</script>

<div class="container-fluid mt-3">
  <div class="row">
    <div class="col text-white">
      <div class="bg-dark p-1">
        <p>
          {pokemonB.name} Lv {pokemonB.level} <br />
          HP {pokemonB.hp}/{selected_pokemonB.hp}
          EFFECTS = {Beffects}
        </p>
      </div>
      <div class="land text-center">
        <div class="animate__animated {Aanim}">
          <img
            src={pokemonA.back_default}
            alt="front of pokemon"
            class="img-fluid m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY"
            width="50%"
            height="50%"
          />
        </div>
      </div>
    </div>
    <div class="col text-white">
      <div class="land text-center">
        <div class="animate__animated {Banim}">
          <img
            src={pokemonB.front_default}
            alt="front of pokemon"
            class="img-fluid mt-5 m-5 pixel animate__animated animate__slower animate__infinite animate__shakeY animate__delay-1s"
            width="50%"
            height="50%"
          />
        </div>
      </div>
      <div class="bg-dark p-2 mt-2">
        <p>
          {pokemonA.name} Lv {pokemonA.level}<br />
          HP {pokemonA.hp}/{selected_pokemonA.hp}
          EFFECTS = {Aeffects}
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
        </div>
      </div>
      <div class="col p-3 bg-dark text-secondary">
        <div class="d-grid gap-3">
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
  <div class="container-fluid text-center bg-primary text-white p-5 mt-3">
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
