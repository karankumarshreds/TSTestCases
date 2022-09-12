import { MyDataStore } from '../class';

class MyClass extends MyDataStore {}
let c: MyClass;

beforeEach(() => {
    c = new MyClass();
});

describe('Class Tests', () => {
    it('Should set the correct value', () => {
        c.set('name', 'John');
        const result = c.get('name');
        expect(result).toEqual('John');
    });

    it('Should return empty string if value is not set', () => {
        const result = c.get('address');
        expect(result).toEqual('');
    });

    it('Should return multiple values using getAll', () => {
        c.set('name', 'John');
        c.set('country', 'Japan');
        const result = c.getAll(['name', 'country']);
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual('John');
        expect(result[1]).toEqual('Japan');
    });

    it('Should only return keys which are set in getAll', () => {
        c.set('address', 'abcd');
        const result = c.getAll(['address', 'city']);
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('abcd');
    });

    it('Should delete the map value properly', () => {
        c.set('name', 'John');
        c.delete('name');
        const result = c.get('name');
        expect(result).toEqual('');
    });
});
