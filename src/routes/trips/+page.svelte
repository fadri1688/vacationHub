<script>
  import TripsComponent from "$lib/TripsComponent.svelte";
  let {data} = $props();
</script>
<div class="container my-5">
    <h1>Deine Reisen</h1>
    <TripsComponent {data}/>
</div>