import { type Request, type Response } from 'express';
import { ToolService } from '../services';
import { type IToll } from '../types/tool/tool.types';

class ToolController {
  async getTool (request: Request, response: Response): Promise<IToll[] | null> {
    return await ToolService.getAll()
  }
}

const toolController = new ToolController()

export { toolController as ToolController };
