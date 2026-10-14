import { Hono } from 'hono'

import docs from './shipment/docs.js'


const route = new Hono()


route.get('/', (ctx) => { 
  return ctx.text('Shipment - Versand')
})

route.use('/docs', docs)


export default route