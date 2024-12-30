import {getAge} from '../../src/plugins/get-age.plugin';
describe('plugin/get-age.plugin.ts', () => {
    test('getAge should return the age of a person',()=>{
        expect(getAge('2004-11-16')).toBe(20);
    })
    test('getAge should return 0 years',()=>{
        const spy = jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(1995);
        const age = getAge('1995-11-16');
        expect(age).toBe(29);
    })
});