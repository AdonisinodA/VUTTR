import { type IToll } from '../types/tool/tool.types'

class Tool implements IToll {
  id: number
  nome: string
  link: string
  descricao: string
  tags: string[]

  constructor ({ nome, link, descricao, tags, id }: IToll) {
    this.id = id
    this.nome = nome
    this.link = link
    this.descricao = descricao
    this.tags = tags
  }
}

export default Tool
