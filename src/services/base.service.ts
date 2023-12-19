// eslint-disable-next-line @typescript-eslint/semi
import { type ITool, type IToolDTO } from '../types/tool/tool.types';
import { type responseDatabase } from '../utils/responseDatabase';

export abstract class BaseService<T, R> {
  abstract getAll (): Promise<T | R>
  abstract getByTag (): Promise<T | R>
  abstract create (): Promise<T | R>
  abstract delete (): Promise<boolean>
}
