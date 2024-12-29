import {buildMakePerson} from '../../src/js-foundation/05-factory';
describe('js-foundation/05-factory', () => {
    const getId = () => '123';
    const getAge = () => 30;
    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getId, getAge});
        expect(typeof makePerson).toBe('function');
    });
    test('makePerson should return a person object', () => {
        const makePerson = buildMakePerson({getId, getAge});
        const person = makePerson({name: 'John', birthdate: '16-11-2004'});
        console.log(person);
        expect(person).toEqual({ 
            id: '123', 
            name: 'John', 
            birthdate: '16-11-2004', 
            age: 30 });
});
});