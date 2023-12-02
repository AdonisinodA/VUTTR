import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { type IToll, type ITollDTO } from '../types/tool/tool.types'
class ToolsRepository {
  private readonly file: string | undefined
  constructor (file?: string | undefined) {
    this.file = file
  }

  async find (tag?: string): Promise<IToll[] | null> {
    if (this.file !== undefined) {
      const fileDatabase: IToll[] = JSON.parse(readFileSync(this.file, 'utf8'))
      if (tag !== undefined) {
        return fileDatabase.filter((e) => e.tags.includes(tag))
      }
      return fileDatabase
    }
    return null
  }

  async insert (tool: ITollDTO): Promise<IToll | null> {
    if (this.file !== undefined) {
      const srcDataBase = join(__dirname, '..', '..', 'database', 'tools.json')
      const fileDatabase: IToll[] = JSON.parse(readFileSync(this.file, 'utf8'))
      const newTool: IToll = {
        id: crypto.randomUUID(),
        ...tool
      }
      fileDatabase.push(newTool)
      const toolsSave = JSON.stringify(newTool)
      writeFileSync(srcDataBase, toolsSave)
      return newTool
    }
    return null
  }

  async delete (id: string): Promise<boolean> {
    if (this.file !== undefined) {
      const srcDataBase = join(__dirname, '..', '..', 'database', 'tools.json')
      const fileDatabase: IToll[] = JSON.parse(readFileSync(this.file, 'utf8'))
      const toolsSave = JSON.stringify(fileDatabase.filter((tool) => tool.id !== id))
      writeFileSync(srcDataBase, toolsSave)
      return true
    }
    return false
  }
}

export default ToolsRepository
