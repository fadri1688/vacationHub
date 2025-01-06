<script>
  import ChatBotComponent from "$lib/ChatBotComponent.svelte";
</script>

<main>
  <div class="container my-5">
    <div class="alert alert-info" role="alert">
      <h1 class="alert-heading">Reiseassistent</h1>
      <p>
        Gib deine Anforderungen ein, und unser Chatbot schlägt dir passende
        Reiseziele vor.
      </p>
      <hr />
    </div>
    <div id="chatBot">
      <ChatBotComponent />
    </div>
  </div>
</main>
