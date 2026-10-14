import { DatabaseSync }from 'node:sqlite'


const db = new DatabaseSync('./db.sqlite')


// db.prepare()

const execute = async (db, sql) => {
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err) reject(err)
      
      resolve()
    })
  })
} 


export { execute }
export default db