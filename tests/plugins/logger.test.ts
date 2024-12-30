import {buildLogger, logger as winstonLogger} from "../../src/plugins/logger.plugin";
describe('plugins/logger.plugin.ts', () => {
    test('buildLogger should return a function logger', ()=>{
        const logger = buildLogger('test');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });
    test('Logger.log should log a message', ()=>{
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test';
        const logger = buildLogger(service);
        logger.log(message);
        //Se espera que se llame a la función log de winston que contenga un objeto con los atributos level, message y service
        expect(winstonLoggerMock).toHaveBeenCalledWith('info', expect.objectContaining({
            level: 'info',
            message, 
            service
        }));
    })
});