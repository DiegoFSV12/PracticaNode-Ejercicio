import {httpClientPlugin} from '../../src/plugins/http-client.plugin';
describe('plugins/http-client.plugin', () => {
    test('http-client Should return a string', async () => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/posts/1');
        expect(data).toEqual({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String)
        });
    });
    test('http-clientshould have POST, PUT and DELETE methods', () => {
        expect(typeof httpClientPlugin.post).toBe('function');
        expect(typeof httpClientPlugin.put).toBe('function');
        expect(typeof httpClientPlugin.delete).toBe('function');
    });
});