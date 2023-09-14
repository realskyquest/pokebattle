<script>
  export let selected_pokemon;
  let name = selected_pokemon.name;
  let HP = selected_pokemon.hp;
  let level = selected_pokemon.level;
  let attack = selected_pokemon.attack;
  let defense = selected_pokemon.defense;
  let speed = selected_pokemon.speed;
</script>

<div class="text-bg-dark mt-2 rounded-2">
  <p>{name}</p>
  <img
    src={selected_pokemon.front_default}
    alt="front of pokemon"
    class="card-img pixel"
  />
</div>
<div class="text-bg-primary mt-2 rounded-2">
  <p>
    Level = {level}<br />
    HP = {HP}<br />
    Attack = {attack}<br />
    Defense = {defense}<br />
    Speed = {speed}<br />
  </p>
  <hr />
  <p>
    Type:<br />
    {#each selected_pokemon.type as type}
      {type} <br />
    {/each}
  </p>
  <hr />
  <p>
    Moves:<br />
    {#each selected_pokemon.moves as move}
      {move} <br />
    {/each}
  </p>
  <hr />
  <p>
    Weakness:<br />
    {#each selected_pokemon.weakness as weakness}
      {weakness} <br />
    {/each}
  </p>
</div>

<style>
  .pixel {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
</style>
