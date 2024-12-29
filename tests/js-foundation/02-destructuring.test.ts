import {datos,USERDOMAIN,USERNAME} from '../../src/js-foundation/02-destructuring';
describe('js-foundation/02-destructuring.ts', () => {
    test('USERNAME should be defined',()=>{
        expect(datos.USERNAME).toContain(USERNAME);
    });
    test('USERDOMAIN should be defined',()=>{
        expect(datos.USERDOMAIN).toContain(USERDOMAIN);
    });
});