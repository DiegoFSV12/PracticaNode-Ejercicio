import {getPokemonById} from "../../src/js-foundation/06-promises";
describe('js-foundation/06-promises', () => {
    test('getPokemonById should return a string', async () => {
        const id = 1;
        const pokemon = await getPokemonById(id);
        console.log(pokemon);
        expect(typeof pokemon).toBe('string');
    });
    test('should return an error if pokemon does not exist', async () => {
        const id = -1;
        try {
            await getPokemonById(id);
            expect(true).toBe(false);
        } catch (error) {
            console.log(error);
            expect(error).toBe(`Pokemon not found with id ${id}`);
        }
    });
});
