<script>
  import { onMount } from "svelte";
  let userInput = "";
  let messages = [];

  async function sendMessage() {
    if (!userInput.trim()) return;

    messages = [...messages, { role: "user", content: userInput }];
    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userInput }),
    });

    const data = await response.json();
    messages = [...messages, { role: "assistant", content: data.reply }];
    userInput = "";
  }
</script>

<div class="card shadow">
  <div class="card-body">
    <div class="messages mb-3">
      {#each messages as message}
        <div class="mb-2">
          <div
            class="p-2 rounded"
            class:message-user={message.role === "user"}
            class:message-assistant={message.role === "assistant"}
          >
            {message.content}
          </div>
        </div>
      {/each}
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        bind:value={userInput}
        placeholder="Frage mich nach Reisezielen..."
        on:keydown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button class="btn btn-primary" on:click={sendMessage}>Senden</button>
    </div>
  </div>
</div>
