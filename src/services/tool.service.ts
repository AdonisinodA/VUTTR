import ToolsRepository from '../repository/tool.repository'
import { type IToll, type ITollDTO } from '../types/tool/tool.types'
import { type BaseService } from './base.service'

class Tool implements BaseService {
  private readonly Toolservice: ToolsRepository
  constructor () {
    this.Toolservice = new ToolsRepository()
  }

  async getAll (): Promise<IToll[] | null> {
    return await this.Toolservice.find()
  }

  async getByTag (tag: string): Promise<IToll[] | null> {
    return await this.Toolservice.find(tag)
  }

  async create (tool: ITollDTO): Promise<IToll | null> {
    return await this.Toolservice.insert(tool)
  }

  async delete (id: string): Promise<boolean> {
    return await this.Toolservice.delete(id)
  }
}

const tool = new Tool()

export default tool
