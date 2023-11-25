// eslint-disable-next-line @typescript-eslint/semi
import { type IToll, type ITollDTO } from '../types/tool/tool.types';

export abstract class BaseService {
  abstract getAll (): Promise<IToll[]>
  abstract getOne (tag: string): Promise<IToll>
  abstract create (tool: ITollDTO): Promise<IToll>
  abstract delete (id: string): Promise<boolean>
}
