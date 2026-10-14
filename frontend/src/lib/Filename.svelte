<script>
  import get_filename from './filename.js'

  let name = $state('')
  let filename = $state('')

  async function oninput (event) {
    filename = await get_filename(name)
  }

  async function onchange (event) {
    filename = await get_filename(name)
  }
</script>

  <div>
    <div>The filename is: {filename}</div>

    <label>
      <span>Input</span>
      <br>
      <input type="text" bind:value={name} {oninput} />
    </label>

    <label>
      <span>Change</span>
      <br>
      <input type="text" bind:value={name} {onchange} />
    </label>
  </div>


  <style>
    div {
      display: flex;
      flex-direction: column;



      align-content: center;
      justify-content: center;
    }
  </style>
