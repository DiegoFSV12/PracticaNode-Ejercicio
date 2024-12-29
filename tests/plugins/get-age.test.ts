import {getAge} from '../../src/plugins/get-age.plugin';
describe('plugin/get-age.plugin.ts', () => {
    test('getAge should return the age of a person',()=>{
        expect(getAge('2004-11-16')).toBe(20);
    })
});