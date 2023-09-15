<footer class="mt-3 p-4 text-bg-dark text-center">
  <p class="p-3 small">
    Brewed by Svelte<br />
    Designed by Bootstrap 5<br />
    Animated by Animate.css<br />
    Data handled by Firebase
  </p>

  <div class="row justify-content-center align-items-center">
    <div class="col-sm-2">
      <p class="p-3 small">Made by realSkyQuest -</p>
    </div>
    <div class="col-sm-2">
      <button
        on:click={() => {
          window.location.href =
            "https://github.com/realskyquest/pokemon-esque";
        }}
        type="button"
        class="btn text-light"
        style="background-color: #4da6ff"
      >
        Github
      </button>
    </div>
  </div>
</footer>
