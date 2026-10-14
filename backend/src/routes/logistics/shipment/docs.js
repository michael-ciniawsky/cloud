import path from 'node:path'

import { serveStatic } from 'hono/serve-static'

const root = path.resolve('./src/logistics/shipment/docs')


export default serveStatic({ root })