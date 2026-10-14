import { Hono } from 'hono'

import supply from './logistics/supply.js'
import shipment from './logistics/shipment.js'


const v1 = new Hono()

v1.route('/supply', supply)
v1.route('/shipment', shipment)


export {
  v1
}