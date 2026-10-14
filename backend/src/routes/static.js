import { Hono } from 'hono'


const route = new Hono()

route.get('/', (ctx) => {
  const mime = ctx.req.header('Accept') 
  
  const message = 'Hello Hono'

  if (mime.includes('text/html')) {
    return ctx.html(`<h1>${message}</h1>`, 201)
  } else if (mime.includes('text/plain')) {
    return ctx.text(message, 201)
  } else {
    return ctx.json({ message }, 201)
  }
})

export default route