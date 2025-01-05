<script>
  let { form } = $props();
</script>

<div class="container my-5">
  <h1>Deine Reisen hinzufügen</h1>
  <p>Bitte füge deine Reisen hinzu</p>

  <div class="container mt-5">
    <h1 class="text-center mb-4">Reisedaten hinzufügen</h1>

    <form class="container mt-4" method="post" action="?/new">
      <!-- ReiseID -->
      <div class="mb-3">
        <label for="reiseId" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="reiseId"
          name="title"
          placeholder="Geben Sie den Reise Titel ein"
          required
        />
      </div>

      <!-- Year -->
      <div class="mb-3">
        <label for="day" class="form-label">Jahr</label>
        <input
          type="number"
          class="form-control"
          id="day"
          name="year"
          placeholder="gebe das Jahr der Reise ein"
          required
        />
      </div>

      <!-- Tage -->
      <div class="mb-3">
        <label for="day" class="form-label">Anzahl Tage</label>
        <input
          type="number"
          class="form-control"
          id="day"
          name="day"
          placeholder="Geben Sie den Tag der Reise ein"
          required
        />
      </div>

      <!-- ShortDescription -->
      <div class="mb-3">
        <label for="description" class="form-label">kurz Beschreibung</label>
        <textarea
          class="form-control"
          id="description"
          name="description"
          rows="3"
          placeholder="Geben Sie die Beschreibung ein"
          required
        ></textarea>
      </div>

      <!-- Accompaniment -->
      <div class="mb-3">
        <label for="description" class="form-label">Reisende</label>
        <textarea
          class="form-control"
          id="description"
          name="acc"
          rows="3"
          placeholder="Geben Sie die alle mit reisende komma getrennt ein"
          required
        ></textarea>
      </div>

      <!-- Country -->
      <div class="mb-3">
        <label for="description" class="form-label">Länder</label>
        <textarea
          class="form-control"
          id="description"
          name="coun"
          rows="3"
          placeholder="Geben Sie die alle mit reisende komma getrennt ein"
          required
        ></textarea>
      </div>

      <!-- Cities -->
      <div class="mb-3">
        <label for="description" class="form-label">Städte</label>
        <textarea
          class="form-control"
          id="description"
          name="cit"
          rows="3"
          placeholder="Geben Sie die alle mit reisende komma getrennt ein"
          required
        ></textarea>
      </div>

      <!-- Bilder hochladen -->
      <div class="mb-3">
        <label for="images" class="form-label">Bild hochladen</label>
        <input type="file" class="form-control" id="images" name="image" />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Daten speichern</button>
    </form>
    {#if form?.success}
      <p class="alert alert-success mt-4">Created</p>
    {/if}
  </div>
</div>
