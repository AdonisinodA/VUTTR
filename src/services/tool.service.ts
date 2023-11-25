import { type IToll, type ITollDTO } from '../types/tool/tool.types'

interface IToolService {
  getAll: () => Promise<IToll[]>
  getOne: (tag: string) => Promise<IToll>
  create: (tool: ITollDTO) => Promise<IToll>
  delete: (id: string) => Promise<boolean>
}

class Tool implements IToolService {
  async getAll (): Promise<IToll[]> {
    throw new Error('Method not implemented.')
  }

  async getOne (tag: string): Promise<IToll> {
    throw new Error('Method not implemented.')
  }

  async create (tool: ITollDTO): Promise<IToll> {
    throw new Error('Method not implemented.')
  }

  async delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}

const tool = new Tool()

export default tool
