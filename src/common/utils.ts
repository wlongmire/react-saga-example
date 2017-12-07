/** Utility function to create a K:V from a list of strings */
export function StringEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce(
        (res, key) => {
            res[key] = key;
            return res;
        }, 
        Object.create(null));
}

export function titleCase(str: string): string {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        })
        .join(' ');
}

export class EnumEx {
    static getNamesAndValues<T extends number>(e: any) {
        return EnumEx.getNames(e).map(n => ({ name: n, value: e[n] as T }));
    }

    static getNames(e: any) {
        return EnumEx.getObjValues(e).filter(v => typeof v === 'string') as string[];
    }

    static getValues<T extends number>(e: any) {
        return EnumEx.getObjValues(e).filter(v => typeof v === 'number') as T[];
    }

    private static getObjValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}
