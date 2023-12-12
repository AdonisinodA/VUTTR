import express from 'express'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import router from './routes/tool.route'

const PORT = 3000
const app = express()
app.use(express.json());
app.use(router)

const server = app.listen(PORT, () => {
  const srcDataBase = join(__dirname, '..', 'database', 'tools.json')
  const PathDataBase = join(__dirname, '..', 'database', 'base.json')
  const database = readFileSync(PathDataBase, 'utf-8')
  if (!existsSync(PathDataBase)) {
    writeFileSync(srcDataBase, database)
  }
  console.log(`server running at port: http://localhost:${PORT}`)
})
export default server
