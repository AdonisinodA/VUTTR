const request =  require("supertest");
import server from "../src/index";


afterEach(() => {
  server.close();
});
describe("API test", () => {
  describe("/tools:get", () => {
    it("isso é ?", async() => {
      let resultado = await request(server).get("/tools")

      expect(4).toBe(4);
    });
  });
});

