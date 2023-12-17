import express from 'express'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import router from './routes/tool.route'
import mongoose from 'mongoose'
import { databaseUri, environment } from './config'
import { TollSchema } from './database/schemas/tool.schema'
import baseDados from '../database/base.json'

mongoose.connect(databaseUri as string).then(async () => {
  console.log('Database connect!')
  if (environment === 'dev') {
    baseDados.forEach(async (tool) => {
      const { id, ...rest } = tool
      const newTool = new TollSchema(rest)
      const verifyTool = await TollSchema.findById(newTool._id).lean()
      console.log('🚀 ~ file: index.ts:17 ~ mongoose.connect ~ verifyTool:', verifyTool)
      if (verifyTool === null) {
        await newTool.save()
      }
      console.log('passou')
    });
  }
}).catch((error: any) => {
  console.log('🚀 ~ file: index.ts:13 ~ mongoose.connect ~ error:', error)
})

const PORT = 3000
const app = express()
app.use(express.json());
app.use(router)

const server = app.listen(PORT, () => {
  const srcDataBaseClone = join(__dirname, '..', 'database', 'tools.json')
  const PathDataBase = join(__dirname, '..', 'database', 'base.json')
  const database = readFileSync(PathDataBase, 'utf-8')
  if (!existsSync(PathDataBase)) {
    writeFileSync(srcDataBaseClone, database)
  }

  console.log(`server running at port: http://localhost:${PORT}`)
})
export default server
