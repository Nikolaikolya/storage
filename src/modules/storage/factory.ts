import {IStorageEngine, IStorageOptions} from "./interface";
import {LocalStorage} from "./engines/local-storage";

export default function factory(namespace: string, args?: IStorageOptions){
    return new FactoryStorage(namespace, args);
}

export class FactoryStorage {
    private readonly engine;

    constructor(private namespace: string, engine?: IStorageOptions) {
        this.engine = engine?.engine ?? new LocalStorage();
    }

    private getKey(key: string): string {
        return this.namespace + key;
    }

    get(key: string): ReturnType<IStorageEngine["get"]> {
        return Promise.resolve(this.engine.get(this.getKey(key)));
    }

    set(key: string, value: string): ReturnType<IStorageEngine["set"]> {
        this.engine.set(this.getKey(key), value);
    }

    remove(key: string): ReturnType<IStorageEngine["remove"]> {
        this.engine.remove(this.getKey(key));
    }
}