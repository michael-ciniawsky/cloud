import { serve } from '@hono/node-server'

import api from './api.js'


const server = serve({
  fetch: api.fetch,
  port: 3000
})


export default server