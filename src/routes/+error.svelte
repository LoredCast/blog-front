
<script>
    import { page } from '$app/stores';
  </script>
  <div>
  <h2>Nothing here :(</h2>
<p>Maybe something went wrong. Try another page or come back later.</p>
<h4>{$page.status}</h4>


</div>

<style>
  div {
    width: 100%;
  }

  p {
    font-family: 'Courier New', Courier, monospace;
  }

  h4 {
    opacity: 30%;
    font-weight: 100;
  }
</style>