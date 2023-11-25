import express from 'express'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const PORT = 3000
const app = express()

app.get('/tools', (req, res) => {
  console.log(req.params, 'params')
  console.log(req.query, 'query')
  res.send('post')
})
app.post('/tools', (req, res) => {
  console.log(req.params, 'params')
  console.log(req.query, 'query')
  res.send('post')
})
app.delete('/tools', (req, res) => res.send('hello world'))

app.listen(PORT, () => {
  const srcDataBase = join(__dirname, '..', 'database', 'tools.json')
  const PathDataBase = join(__dirname, '..', 'database', 'base.json')
  const database = readFileSync(PathDataBase, 'utf-8')
  if (!existsSync(srcDataBase)) {
    writeFileSync(srcDataBase, database)
  }
  console.log(`server running at port: http://localhost:${PORT}`)
})
