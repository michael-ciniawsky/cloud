<script>
  import get_filename from './filename.js'

  let filename = $state('')

  async function onsubmit (event) {
    console.log(event)

    // filename = await get_filename(event.data)
  }
</script>

<div>
  <form id="form">
    <input type="text" />

    <button type="submit" {onsubmit}>Submit</button>
  </form>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
</style>