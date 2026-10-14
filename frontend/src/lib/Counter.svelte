<script>
  let count = $state(0)

  const btn = {
    id: 'btn',
    class: 'btn',
    onclick (event) {
      count += 1
    }
  }
</script>

<button {...btn}>
  count is {count}
</button>

<style>
  .btn {
    background-color: aquamarine;

    &:hover {
      transform: scale(1.5);
    }
  }
</style>
