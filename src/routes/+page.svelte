<script>
  // Hier kannst du logische Variablen oder Funktionen hinzufügen
  import WishlistComponent from "$lib/WishlistComponent.svelte";
  let { data } = $props();
</script>

<div class="hero-section">
  <div class="container">
    <h1 class="home-text">Willkommen zu deinem Reisetagebuch!</h1>
    <p class="home-text">
      Füge deine Reisen unkompliziert hinzu und schaue sie dir in Ruhe später
      wieder an :)
    </p>
  </div>
</div>

<!-- Hauptinhalt der Seite -->
<div class="container my-5">
  <WishlistComponent {data} />
</div>
