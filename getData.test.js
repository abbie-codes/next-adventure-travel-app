import { getData } from './src/client/js/geonamesAPI';
describe("Testing the getData function", () => {
    test('getData resolves rather than rejects', async () => {
    await expect(getData()).resolves;
  });
});