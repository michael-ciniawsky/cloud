import { Hono } from 'hono'


const route = new Hono().basePath('/supply')


route.get('/', (ctx) => {
  return ctx.text('Supply - Produktionsversorgung')
})


export default route