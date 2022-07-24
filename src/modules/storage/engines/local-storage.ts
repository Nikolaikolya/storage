import {IStorageEngine} from "../interface";

export class LocalStorage implements IStorageEngine {
    get(key: string): ReturnType<IStorageEngine['get']> {
        return localStorage.getItem(key);
    }

    remove(key: string): ReturnType<IStorageEngine['remove']> {
        localStorage.removeItem(key);
    }

    set(key: string, value: string): ReturnType<IStorageEngine['set']> {
        localStorage.setItem(key, value);
    }

}