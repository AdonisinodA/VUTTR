import { readFileSync, writeFileSync } from 'fs'
import { type IToll } from '../types/tool/tool.types'
import { join } from 'path'
class ToolsRepository {
  private readonly file: string | undefined
  constructor (file?: string | undefined) {
    this.file = file
  }

  async find (tag: string): Promise<IToll[] | null> {
    if (this.file !== undefined) {
      const fileDatabase: IToll[] = JSON.parse(readFileSync(this.file, 'utf8'))
      return fileDatabase.filter((e) => e.tags.includes(tag))
    }
    return null
  }

  async delete (id: number): Promise<string> {
    if (this.file !== undefined) {
      const srcDataBase = join(__dirname, '..', '..', 'database', 'tools.json')
      const fileDatabase: IToll[] = JSON.parse(readFileSync(this.file, 'utf8'))
      const toolsSave = JSON.stringify(fileDatabase.filter((e) => e.id !== id))
      writeFileSync(srcDataBase, toolsSave)
    }
    return 'sucesso'
  }
}

export default ToolsRepository
