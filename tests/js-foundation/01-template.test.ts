import {emailTemplate} from '../../src/js-foundation/01-template';
describe('js-foundation/01-template.ts', () => {
    test('emailTemplate should contain a greeting',()=>{
        //Lo de aqui sera la prueba a realizar
        expect(emailTemplate).toContain('Hi,');
    })
    test('emailTemplate should contain a {{name}} and {{orderId}}',()=>{
        //2 Formas de evaluar si el texto contiene las variables
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');
    });
});