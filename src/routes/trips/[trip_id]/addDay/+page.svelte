<script>
  import TripsPage from "../+page.svelte"; 
  export let rID;
</script>

<div class="container my-5">
  <h1>Deine Tag hinzufügen</h1>
  <p>Bitte füge deine Tag hinzu</p>

  <div class="container mt-5">
    <h1 class="text-center mb-4">Tag hinzufügen</h1>

    <form>
      <!-- ReiseID -->
      <input
        type="hidden"
        class="form-control"
        id="reiseId"
        name="reiseId"
        value=""
      />
      <p>{rID}</p>

      <!-- Tag -->
      <div class="mb-3">
        <label for="day" class="form-label">Tag</label>
        <input
          type="number"
          class="form-control"
          id="day"
          name="day"
          placeholder="Geben Sie den Tag der Reise ein"
          required
        />
      </div>

      <!-- Beschreibung -->
      <div class="mb-3">
        <label for="description" class="form-label">Beschreibung</label>
        <textarea
          class="form-control"
          id="description"
          name="description"
          rows="5"
          placeholder="Geben Sie die Beschreibung ein"
          required
        ></textarea>
      </div>

      <!-- Bilder hochladen -->
      <div class="mb-3">
        <label for="images" class="form-label">Bilder hochladen</label>
        <input
          type="file"
          class="form-control"
          id="images"
          name="images"
          multiple
          accept="image/*"
        />
        <small class="form-text text-muted"
          >Sie können mehrere Bilder auswählen.</small
        >
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Daten speichern</button>
    </form>
  </div>
</div>
