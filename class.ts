export abstract class MyDataStore {
    private data: Map<string, string>;

    constructor() {
        this.data = new Map<string, string>();
    }

    public set(key: string, value: string) {
        this.data.set(key, value);
    }

    // what should happen if we get a key that is not in the map
    public get(key: string): string {
        return this.data.get(key) || '';
    }

    // what should happen if we get key that is not in the map
    public getAll(keys: string[]): string[] {
        const result: string[] = [];
        // keys = ['ssdfgsdfg', 'sdfgsdfg']
        keys.forEach((key) => {
            const value = this.data.get(key);
            if (value) {
                result.push(value);
            }
        });
        return result;
    }

    public delete(key: string) {
        this.data.delete(key);
    }
}

class MyMap extends MyDataStore {}

const m = new MyMap();
m.set('name', 'Karan');
console.log(m.get('name'));
m.set('country', 'India');
const results = m.getAll(['name', 'country']);
m.delete('name');
