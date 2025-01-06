<script>
  export let data;
  console.log("________________: ", data.tripId);
  let day = "";
  let description = "";
  let selectedFile;

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Bitte wählen Sie eine Datei aus.");
      return;
    }

    const formData = new FormData();
    formData.append("type", "day"); // Typ für die API
    formData.append("day", day);
    formData.append("reiseId", data.tripId);
    formData.append("description", description);
    formData.append("image", selectedFile);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Bild erfolgreich hochgeladen!");
    } else {
      alert("Fehler beim Hochladen.");
    }
  };
</script>

<div class="container my-5">
  <h1>Tag hinzufügen</h1>
  <p>Bitte füge dein Tag hinzu</p>

  <div class="container mt-5">
    <form on:submit|preventDefault={handleUpload}>
      <!-- ReiseID -->
      <input
        type="hidden"
        class="form-control"
        id="reiseId"
        name="reiseId"
        bind:value={data.tripId}
      />
      <!-- Tag -->
      <div class="mb-3">
        <label for="day" class="form-label">Tag</label>
        <input
          type="number"
          class="form-control"
          id="day"
          name="day"
          placeholder="Geben Sie den Tag der Reise ein"
          bind:value={day}
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
          placeholder="Tagebuch Eintrag"
          bind:value={description}
          required
        ></textarea>
      </div>

      <!-- Bilder hochladen -->
      <div class="mb-3">
        <label for="images" class="form-label">Bilder hochladen</label>
        <input
          type="file"
          id="image"
          on:change={(e) => (selectedFile = e.target.files[0])}
          class="form-control"
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Daten speichern</button>
    </form>
  </div>
</div>
