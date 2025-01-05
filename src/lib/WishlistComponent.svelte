<script>
  export let data;
  console.log("________________: ", data);
</script>

<div class="row g-4">
  <!-- Bilder müüsen 3 zu 4 Auflösung sein um ins LAyout zu passen -->
  {#each data.wishes as wishes}
    <div class="col-12 col-sm-6 col-md-4 col-lg-4">
      <div class="card">
        <img
          id="bild"
          src="{wishes.Pic}"
          class="card-img-top"
          alt={wishes.Pic}
        />
        <div class="card-body">
          <h5 class="card-title">
            {wishes.Name}
          </h5>

          <p class="card-text">
            <b>Kurzbeschreibung: </b>
            {wishes.ShortDesc}
          </p>
          <p class="card-text">
            <b>Länder: </b>
            {wishes.Countries}
          </p>
        </div>
      </div>
    </div>
  {/each}
  <div class="col-12 col-sm-6 col-md-4 col-lg-4">
    <div class="card">
      <a href="/wishes">
        <img id="bild" src="/images/plus.png" class="card-img-top" alt="plus" />
      </a>
      <div class="card-body">
        <h5 class="card-title">Wunschdestination hinzufügen</h5>
        <a href="/wishes" id="buttonGray" class="btn"> Hinzufügen </a>
      </div>
    </div>
  </div>
</div>
