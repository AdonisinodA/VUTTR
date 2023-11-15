import { IToll } from "../types/tool/tool.types";

class Tool implements IToll {
  nome: string;
  link: string;
  descricao: string;
  tags: string[];

  constructor({ nome, link, descricao, tags }: IToll) {
    this.nome = nome;
    this.link = link;
    this.descricao = descricao;
    this.tags = tags;
  }
}

export default Tool;

