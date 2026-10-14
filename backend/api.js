import fs from 'node:fs'
import path from 'node:path'

import { Hono } from 'hono'

import { env } from 'hono/adapter'
import { cors } from 'hono/cors'
import { csrf } from 'hono/csrf'
import { logger } from 'hono/logger'

import { stream } from 'hono/streaming'
import { serveStatic } from 'hono/serve-static'

import auth from '#middleware/auth.js'
import index from '#middleware/index.js'
import profiler from '#middleware/profiler.js'

import assets from '#routes/static.js'
import * as logistics from '#routes/logistics.js'
import * as production from '#routes/production.js'

// domian.tld -> domian.tld/api
const api = new Hono() // .basePath('/api')

api.use(
  cors(),
  csrf(),
  auth
)

if (process.env.NODE_ENV === 'development') {
  api.use(
    logger(), 
    profiler
  )
}


api.use('/page/*', index)

api.get('/page/content', ({ req, res, render }) => {
  return render({
    title: 'My Site',
    text: '<p>Hello Joe</p>'
  })
})


api.get('/static/:filename', ({ req, res, json }) => {
  const filename = req.param('filename')

  return json({
    message: 'Static File',
    filename
  }, 201, {
    'X-Custom-Filename': filename
  })
})

api.get('/socket', (ctx) => {

})


api.get('/stream', (ctx) => {

})



api.route('/static', assets)
api.route('/logistics/v1', logistics.v1)
api.route('/production/v1', production.v1)

/* api.notFound(() => {

})
 */

export default api