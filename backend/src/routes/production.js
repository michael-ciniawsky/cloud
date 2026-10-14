import { Hono } from 'hono'

import supply from './production/supply.js'


const v1 = new Hono()

v1.route('/supply', supply)


export {
  v1
}