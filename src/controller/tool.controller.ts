import { type Request, type Response } from 'express';
import { ToolService } from '../services';
import { ITollDTO, type IToll } from '../types/tool/tool.types';

class ToolController {
  async getTool (request: Request, response: Response): Promise<void> {
    const { tag } = request.query
    const _tag: string | undefined = tag as string
    let result: IToll[] | null = null
    if (tag !== undefined) {
      result = await ToolService.getByTag(_tag);
    } else if (tag === undefined) {
      result = await ToolService.getAll();
    }
    response.json(result);
  }

  async createTool (request: Request, response: Response): Promise<void> {
    const tool = request.body
    const newTool: IToll | null = await ToolService.create(tool)

    response.json(newTool);
  }

  async deleteTool (request: Request, response: Response): Promise<void> {
    const { id } = request.params
    const _id = Number(id)
    const newTool: boolean = await ToolService.delete(_id)

    response.send(newTool);
  }
}

const toolController = new ToolController();

export { toolController as ToolController };
