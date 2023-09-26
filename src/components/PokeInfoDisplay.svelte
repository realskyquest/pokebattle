<script>
  export let selected_pokemon;
</script>

<div class="text-bg-dark text-center rounded-2">
  <p>{selected_pokemon.name}</p>
  <img
    src={selected_pokemon.front_default}
    alt="front of pokemon"
    class="card-img pixel"
    width="100%"
    height="100%"
  />
</div>
<div class="text-bg-primary text-center rounded-2">
  <p>
    Level = {selected_pokemon.level}<br />
    HP = {selected_pokemon.hp}<br />
    Attack = {selected_pokemon.attack}<br />
    Defense = {selected_pokemon.defense}<br />
    Speed = {selected_pokemon.speed}<br />
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
