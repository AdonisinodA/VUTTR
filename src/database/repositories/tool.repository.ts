import { readFileSync, writeFileSync } from 'fs'
import { FlattenMaps, Types } from 'mongoose'
import { join } from 'path'
import { environment } from '../../config'
import { type ITool, type IToolDTO } from '../../types/tool/tool.types'
import { type responseDatabase } from '../../utils/responseDatabase'
import { ToolSchema } from '../schemas/tool.schema'
class ToolsRepository {
  private readonly file: boolean
  constructor () {
    this.file = environment === 'test'
  }

  async find (tag?: string): Promise< Array<responseDatabase<IToolDTO>> | ITool[] | []> {
    if (this.file) {
      const srcDataBase = join(__dirname, '..', '..', '..', 'database', 'tools.json')
      const fileDatabase: ITool[] = JSON.parse(readFileSync(srcDataBase, 'utf8'))
      if (tag !== undefined) {
        return fileDatabase.filter((e) => e.tags.includes(tag))
      }
      return fileDatabase
    }
    const result = await ToolSchema.find({ tags: { $in: tag } }).lean()
    return result
  }

  async insert (tool: IToolDTO): Promise<responseDatabase<IToolDTO> | ITool> {
    if (this.file) {
      const srcDataBase = join(__dirname, '..', '..', '..', 'database', 'tools.json')
      const fileDatabase: ITool[] = JSON.parse(readFileSync(srcDataBase, 'utf8'))
      const id = Math.floor(Math.random() * 2000)
      const newTool: ITool = {
        id,
        ...tool
      }
      fileDatabase.push(newTool)
      const toolsSave = JSON.stringify(fileDatabase)
      writeFileSync(srcDataBase, toolsSave)
      return newTool
    }
    const result = await new ToolSchema(tool).save()
    return result
  }

  async delete (id: number): Promise<boolean> {
    if (this.file) {
      const srcDataBase = join(__dirname, '..', '..', '..', 'database', 'tools.json')
      const fileDatabase: ITool[] = JSON.parse(readFileSync(srcDataBase, 'utf8'))
      const toolsSave = JSON.stringify(fileDatabase.filter((tool) => tool.id !== id))
      writeFileSync(srcDataBase, toolsSave)
      return true
    } else if (!this.file) {
      await ToolSchema.deleteOne({ id })
      return true
    }
    return false
  }
}

export default ToolsRepository
