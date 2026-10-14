async function get_filename (name = "test") {
  const res = await fetch(`http://localhost:3000/api/static/${name}`, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${btoa('admin1:test1234')}`
    }
  })

  if (!res.ok) {
    console.log(res.status)

    return 'No filename'
  }

  const { filename } = await res.json()

  return filename
}


export default get_filename