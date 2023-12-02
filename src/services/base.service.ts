// eslint-disable-next-line @typescript-eslint/semi
import { type IToll, type ITollDTO } from '../types/tool/tool.types';

export abstract class BaseService {
  abstract getAll (): Promise<IToll[] | null>
  abstract getByTag (tag: string): Promise<IToll[] | null>
  abstract create (tool: ITollDTO): Promise<IToll | null>
  abstract delete (id: string | null): Promise<boolean>
}
