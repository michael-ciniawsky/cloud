import path from 'node:path'
import { promises as fs } from 'node:fs'

import { Hono } from 'hono'


const route = new Hono()

route.get('/', async (ctx) => {
  console.log(ctx.path)

  const html = await fs.readFile(
    path.resolve('./src/production/supply/index.html')
  )

  return ctx.html(html)
}) 


export default route