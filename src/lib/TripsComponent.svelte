<script>
  export let data;
  console.log("________________: ", data);
</script>

<div class="row g-4">
  <!-- Bilder müüsen 3 zu 4 Auflösung sein um ins LAyout zu passen -->
  {#each data.trips as trip}
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <img
          id="bild"
          src="/images/{trip.TitleImage}"
          class="card-img-top"
          alt={trip.Title}
        />
        <div class="card-body">
          <h5 class="card-title">
            <a href={`/trips/${trip._id}`}>{trip.Title}</a>
          </h5>
          
          <p class="card-text">
            Jahr: {trip.Year}<br />
            Dauer: {trip.Duration}<br />
            Kurzbeschreibung: {trip.ShortDescription}
          </p>
          <form class="container mt-4" method="post" action="?/delete">
            <input name="trip_id" type="hidden" value={trip._id} />
            <button id="deletBtn" input="submit" class="btn btn-danger">Delete</button>
        </form>
        </div>
      </div>
    </div>
  {/each}
</div>
