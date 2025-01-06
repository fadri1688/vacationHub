<script>
  import "./styles.css";
  let { children } = $props();
</script>

<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <div class="collapse navbar-collapse justify-content" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/trips">Deine Reisen</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/add">Reise hinzufügen</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {@render children()}
</div>
