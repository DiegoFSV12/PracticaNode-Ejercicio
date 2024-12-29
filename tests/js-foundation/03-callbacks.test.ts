import {getUserById} from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => {
    test('getUserById should return an error if user does not esxist', (done) => {
        const id = 10;
        getUserById(id, (error, user) => {
            expect(error).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    })
    test('getUserById should return a user', ()=>{
        const id = 1;
        getUserById(id, (error, user) => {
            expect(error).toBeUndefined();
            expect(user?.name).toEqual('John Doe');
            //no se usa toBe porque tecnicamente el objeto user es un objeto diferente al que se espera
        });
    })
});