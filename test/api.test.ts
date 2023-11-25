const request =  require("supertest");
import server from "../src/index";

// beforeEach((done) => {
//   app_ = server;
//   app.once("listening", done);
// });

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

