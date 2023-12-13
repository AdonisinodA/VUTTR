import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { environment } from '../../config'
import { type IToll, type ITollDTO } from '../../types/tool/tool.types'
class ToolsRepository {
  private readonly file: boolean
  constructor () {
    this.file = environment === 'test'
  }

  async find (tag?: string): Promise<IToll[] | null> {
    if (this.file) {
      const srcDataBase = join(__dirname, '..', '..', '..', 'database', 'tools.json')
      const fileDatabase: IToll[] = JSON.parse(readFileSync(srcDataBase, 'utf8'))
      if (tag !== undefined) {
        return fileDatabase.filter((e) => e.tags.includes(tag))
      }
      return fileDatabase
    }
    return null
  }

  async insert (tool: ITollDTO): Promise<IToll | null> {
    if (this.file) {
      const srcDataBase = join(__dirname, '..', '..', '..', 'database', 'tools.json')
      const fileDatabase: IToll[] = JSON.parse(readFileSync(srcDataBase, 'utf8'))
      const id = Math.floor(Math.random() * 2000)
      const newTool: IToll = {
        id,
        ...tool
      }
      fileDatabase.push(newTool)
      const toolsSave = JSON.stringify(fileDatabase)
      writeFileSync(srcDataBase, toolsSave)
      return newTool
    }
    return null
  }

  async delete (id: number): Promise<boolean> {
    if (this.file) {
      const srcDataBase = join(__dirname, '..', '..', '..', 'database', 'tools.json')
      const fileDatabase: IToll[] = JSON.parse(readFileSync(srcDataBase, 'utf8'))
      const toolsSave = JSON.stringify(fileDatabase.filter((tool) => tool.id !== id))
      writeFileSync(srcDataBase, toolsSave)
      return true
    }
    return false
  }
}

export default ToolsRepository
