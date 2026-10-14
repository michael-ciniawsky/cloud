import { Hono } from 'hono'
import { setCookie, getCookie } from 'hono/cookie'

import { create, execute } from '#db/db.js'

let db;

const route = new Hono()

route.get('/db/create', async (ctx) => {
  const db = create('./sqlite.db')

  setCookie(ctx, 'DB', './sqlite.db')

  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS products {
        id INTEGER AUTOINCREMENT PRIMARY KEY,
        name TEXT NOT NULL
        price DECIMAL(2, 10) NOT NULL
      }`
    )
  } catch (err) {
    return ctx.error('SQL Statement execution failed')
  } finally {
    db.close()

    return ctx.json({
      message: '[GET] DB Create'
    })
  }
})

route.get('/db/query', async (ctx) => {
  const cookie = getCookie(ctx, 'DB')

  console.log(cookie)

  const sql = `SELECT * FROM products`

  try {
    const results = await execute(db, sql)
  } catch (err) {
    console.log(err)

    ctx.error(err)
  } finally {
    db.close()

    return ctx.json({
      message: '[GET] DB Query'
    })
  }

})

route.post('/db/query', async (ctx) => {
  const sql = `INSERT INTO products(name, price) VALUES (?, ?)`
  const params = [ 'iPhone', 899,99 ]

  try {
    await execute(db, sql, params)
  } catch (err) {
    console.log(err)

    return ctx.error('Db Uodate failed')
  } finally {
    db.close()

    return ctx.text('DB Updated')
  }
})