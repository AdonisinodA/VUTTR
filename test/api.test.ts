const request = require("supertest");
const validListTools = require("./mocks/valid-list-tools.json")
import server from "../src/index";

afterEach(() => {
  server.close();
});
describe("API test", () => {
  describe("/tools:get", () => {
    it("sucesso listando todos", async () => {
      let {_body} = await request(server).get("/tools");
      expect(_body).toEqual(validListTools);
    });
  });
});

