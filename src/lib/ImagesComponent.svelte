<script>
  export let trip;
  console.log("Next step: ");
  console.dir(trip, { depth: null });
  console.log("Daten als JSON:", JSON.stringify(trip, null, 2));

</script>

<div id="card-box" class="card">
  <div class="scroll-container">
    {#each trip.Images as image}
    <img
      src="/uploads/{image}"
      alt="{image}"
      width="300"
      height="400"
    />
    {/each}
  </div>
  <div class="card-body">
    <h5 class="card-title">Tag: {trip.Day} der Reise</h5>
    <p class="card-text">
      {trip.Description} <br />
    </p>
  </div>
</div>
