<script>
  let name = "";
  let countries = "";
  let shortDesc = "";
  let selectedFile;

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Bitte wählen Sie eine Datei aus.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("countries", countries);
    formData.append("shortDesc", shortDesc);
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
  <h1>Deine Wunschdestionation hinzufügen</h1>
  <p>Bitte füge deine Destination hinzu</p>

  <div class="container mt-5">
    <h1>Eintrag hinzufügen</h1>
    <form on:submit|preventDefault={handleUpload}>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" bind:value={name} class="form-control" />
      </div>
      <div class="mb-3">
        <label for="countries" class="form-label">Länder</label>
        <input
          type="text"
          id="countries"
          bind:value={countries}
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="shortDesc" class="form-label">Kurzbeschreibung</label>
        <textarea id="shortDesc" bind:value={shortDesc} class="form-control"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Bild hochladen</label>
        <input
          type="file"
          id="image"
          on:change={(e) => (selectedFile = e.target.files[0])}
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Hochladen</button>
    </form>
  </div>
</div>
