import {listening} from "./src/server/index.js";
describe("Testing the server functionality", () => {
    test("Testing the listening() function", () => {
        expect(listening).toBeDefined();
    })
});
