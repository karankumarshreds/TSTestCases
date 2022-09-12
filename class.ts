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

// class MyClass extends MyDataStore {
//     public set(key: string, value: string): void {
//         this.set( key, value)
//     }
//     public get(key: string): string {
//         return ""
//     }
//     public getAll(keys: string[]): string[] {
//         return []
//     }
//     public delete(key: string): void {

//     }
// }
