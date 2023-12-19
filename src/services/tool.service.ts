import ToolsRepository from '../database/repositories/tool.repository'
import { type ITool, type IToolDTO } from '../types/tool/tool.types'
import { type responseDatabase } from '../utils/responseDatabase'

class Tool {
  private readonly Toolservice: ToolsRepository
  constructor () {
    this.Toolservice = new ToolsRepository()
  }

  async getAll (): Promise<Array<responseDatabase<IToolDTO>> | ITool[]> {
    return await this.Toolservice.find()
  }

  async getByTag (tag: string): Promise<Array<responseDatabase<IToolDTO>> | ITool[]> {
    return await this.Toolservice.find(tag)
  }

  async create (tool: IToolDTO): Promise<responseDatabase<IToolDTO> | ITool> {
    return await this.Toolservice.insert(tool)
  }

  async delete (id: number): Promise<boolean> {
    return await this.Toolservice.delete(id)
  }
}

const tool = new Tool()

export default tool
