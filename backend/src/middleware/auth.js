import { basicAuth } from 'hono/basic-auth'

const users = [
  { username: 'admin1', password: 'test1234' },
  { username: 'admin2', password: 'test1234' },
  { username: 'admin3', password: 'test1234' }
]


export {
  users
}

export default basicAuth(...users)