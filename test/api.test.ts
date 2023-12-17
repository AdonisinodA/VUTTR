const request = require("supertest");
const validListTools = require("./mocks/valid-list-tools.json")
const validQueryTool = require("./mocks/valid-query-tool.json")
import {join} from  "path"
import {readFileSync,writeFileSync,existsSync} from  "fs"
import server from "../src/index";

afterEach(() => {
  server.close();
});

beforeEach(()=>{
  const srcDataBase = join(__dirname, '..', 'database', 'tools.json')
  const PathDataBase = join(__dirname, '..', 'database', 'base.json')
  const database = readFileSync(PathDataBase, 'utf-8')
    writeFileSync(srcDataBase, database)
})

describe("API test", () => {

  describe("/tools:GET", () => {
    it("sucesso listando todos", async () => {
      let {_body} = await request(server).get("/tools");
      console.log("🚀 ~ file: api.test.ts:24 ~ it ~ _body:", _body)
      expect(_body).toEqual(validListTools);
    });
  });

  describe("/tools?tag=?:GET", () => {
    it("sucesso buscando uma ferramenta", async () => {
      let {_body} = await request(server).get("/tools?tag=json");
      console.log("🚀 ~ file: api.test.ts:24 ~ it ~ _body:", _body)
      expect(_body).toEqual(validQueryTool);
    });
  });


  describe("/tools?tag=?:POST", () => {
    it("sucesso criando ferramenta", async () => {
      const payload = {
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        link: "https://www.fastify.io/",
        tags: [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ],
        title: "fastify"
    }
      let {_body} = await request(server).post("/tools?tag=json").send(payload)
      console.log("🚀 ~ file: api.test.ts:54 ~ it ~ _body:", _body)
      expect(_body.id).toBeGreaterThanOrEqual(1);
      expect(_body.id).toBeLessThanOrEqual(1999);
    });
  });

  describe("/tools/:id :DELETE", () => {
    it("sucesso deletar item", async () => {
      let {_body} = await request(server).delete("/tools/2");
      expect(_body).toEqual(true);
    });
  });
});

