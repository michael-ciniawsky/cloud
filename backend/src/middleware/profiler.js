async function profiler (ctx, next) {
  const start = performance.now()
  
  await next()
  
  const end = performance.now()

  ctx.res
    .headers
    .set('X-Response-Time', `${end - start}`)

  console.log(`Response Time: ${end - start}`)
}


export default profiler