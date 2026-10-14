import test from 'node:test'
import assert from 'node:assert'

import api from '../api.js'

const headers = new Headers()

headers.set('Authorization', `Basic ${btoa('admin2:test1234')}`)

test('GET /logistics/v1/shipment', async () => {
  const req = await api.request(
    '/api/logistics/v1/shipment', { method: 'GET', headers }
  )

  // console.log(req)

  // Response Body
  const body = await req.text()

  // console.log(body)
  
  assert.equal(body, 'Shipment - Versand')
})