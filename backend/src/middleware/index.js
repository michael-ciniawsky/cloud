const Index = (content) => `
<DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${content.title || 'Hono'}</title>
</head>
<body>
  ${content.text}
</body>
</html>
`

const middleware = async (ctx, next) => {
  ctx.setRenderer((content) => {
    console.log(content)

    return ctx.html(
      Index(content)
    )
  })

  await next()
}


export default middleware