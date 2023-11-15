"use strict";

var _tool = _interopRequireDefault(require("./entities/tool"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const tool = new _tool.default({
  descricao: 'teste',
  link: 'teste',
  nome: 'teste',
  tags: ['teste']
});
console.log(tool, 'tools');