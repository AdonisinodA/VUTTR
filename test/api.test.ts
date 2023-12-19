const request = require("supertest");
const validListTools = require("./mocks/valid-list-tools.json")
const validQueryTool = require("./mocks/valid-query-tool.json")
import {join} from  "path"
import {readFileSync,writeFileSync} from  "fs"
import server from "../src/index";
import { environment } from "../src/config";

afterEach(() => {
  server.close();
});

beforeEach(()=>{
  if(environment === "test"){
    const srcDataBase = join(__dirname, '..', 'database', 'tools.json')
    const PathDataBase = join(__dirname, '..', 'database', 'base.json')
    const database = readFileSync(PathDataBase, 'utf-8')
    writeFileSync(srcDataBase, database)
    
  }
  jest.useFakeTimers()
})

describe("API test", () => {

  describe("/tools:GET", () => {
    it("sucesso listando todos", async () => {
      let server_= await request(server)
      let {_body} = await server_.get("/tools");
      expect(_body).toEqual(validListTools);
    });
  });

  describe("/tools?tag=?:GET", () => {
    it("sucesso buscando uma ferramenta", async () => {
      let {_body} = await request(server).get("/tools?tag=json");
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

