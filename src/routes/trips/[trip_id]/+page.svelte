<script>
  import ImagesComponent from "$lib/ImagesComponent.svelte";
  export let data;
  const entries = data.trips;
  export let rID = entries[0].ReiseID;

</script>

<div class="container my-5">
  <a href="/trips" id="buttonGray" class="btn d-flex align-items-center">
    Back
  </a>

  <h1 class="font-weight-bold mt-2 mb-2">Deine Reise</h1>
  {#each entries as trip}
    <ImagesComponent {trip} />
  {/each}
  <div id="spacing" class="row">
    <a href="/trips/{rID}/addDay" id="buttonGray" class="btn btn-lg btn-block"
      >Add Day
    </a>
  </div>
</div>
