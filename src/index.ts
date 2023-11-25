import express from 'express'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import router from './controllers/tools.controller'

const PORT = 3000
const app = express()
app.use(router)

const server = app.listen(PORT, () => {
  const srcDataBase = join(__dirname, '..', 'database', 'tools.json')
  const PathDataBase = join(__dirname, '..', 'database', 'base.json')
  const database = readFileSync(PathDataBase, 'utf-8')
  if (!existsSync(srcDataBase)) {
    writeFileSync(srcDataBase, database)
  }
  console.log(`server running at port: http://localhost:${PORT}`)
})
export default server
