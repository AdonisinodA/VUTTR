import * as http from "http";
import { app, server } from "../src/index";

let app_: http.Server;
beforeEach((done) => {
  app_ = server;
  app.once("listening", done);
});

afterEach(() => {
  server.close();
});
describe("API test", () => {
  describe("/tools:get", () => {
    it("isso é ?", () => {
      let resultado = 4;

      expect(resultado).toBe(4);
    });
  });
});

