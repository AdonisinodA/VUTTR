"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Tool {
  constructor({
    nome,
    link,
    descricao,
    tags
  }) {
    this.nome = nome;
    this.link = link;
    this.descricao = descricao;
    this.tags = tags;
  }
}
var _default = exports.default = Tool;