/** Utility function to create a K:V from a list of strings */
export function StringEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce(
        (res, key) => {
            res[key] = key;
            return res;
        }, 
        Object.create(null));
}

/** Dictionary implementation - useful for typed key value pairs */
export class Dictionary<T> {
    _keys: string[] = new Array<string>();
    _values: T[] = new Array<T>();

    constructor(init: { key: string; value: T }[]) {
        for (let i = 0; i < init.length; i++) {
            this[init[i].key] = init[i].value;
            this._keys.push(init[i].key);
            this._values.push(init[i].value);
        }
    }

    add(key: string, value: T) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    }

    remove(key: string) {
        const index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    }

    keys(): string[] {
        return this._keys;
    }

    values(): T[] {
        return this._values;
    }

    containsKey(key: string): boolean {
        if (typeof this[key] === 'undefined') {
            return false;
        }
        return true;
    }
}