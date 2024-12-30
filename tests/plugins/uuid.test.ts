import {getId} from '../../src/plugins/uuid.plugin';

describe('plugins/uuid', () => {
    test('should return a string', () => {
        const uuid = getId();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    });
});