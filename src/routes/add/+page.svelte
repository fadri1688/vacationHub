<script>
  let title = "";
  let year = "";
  let day = "";
  let description = "";
  let acc = "";
  let coun = "";
  let cit = "";
  let selectedFile;

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("type", "trip");
    formData.append("title", title);
    formData.append("year", year);
    formData.append("day", day);
    formData.append("description", description);
    formData.append("acc", acc);
    formData.append("coun", coun);
    formData.append("cit", cit);
    formData.append("image", selectedFile);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      alert("Trip erfolgreich gespeichert!");
    } else {
      alert("Fehler: " + result.error);
    }
  };
</script>

<div class="container my-5">
  <h1>Deine Reisen hinzufügen</h1>
  <p>Bitte füge deine Reisen hinzu</p>
  <form on:submit|preventDefault={handleUpload}>
    <!-- ReiseID -->
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" id="title" bind:value={title} class="form-control" />
    </div>

    <!-- Year -->
    <div class="mb-3">
      <label for="day" class="form-label">Jahr</label>
      <input
        type="number"
        class="form-control"
        id="day"
        name="year"
        bind:value={year}
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
        bind:value={day}
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
        bind:value={description}
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
        bind:value={acc}
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
        bind:value={coun}
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
        bind:value={cit}
        rows="3"
        placeholder="Geben Sie die alle mit reisende komma getrennt ein"
        required
      ></textarea>
    </div>

    <!-- Bilder hochladen -->
    <div class="mb-3">
      <label for="images" class="form-label">Bild hochladen</label>
      <input type="file" class="form-control" id="images" name="image" on:change={(e) => (selectedFile = e.target.files[0])}/>
    </div>

    <!-- Submit Button -->
    <button type="submit" class="btn btn-primary">Daten speichern</button>
  </form>
</div>
