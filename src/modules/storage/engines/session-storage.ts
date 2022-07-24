import {IStorageEngine} from "../interface";

export class SessionStorage implements IStorageEngine {
    get(key: string): ReturnType<IStorageEngine["get"]> {
        return sessionStorage.getItem(key);
    }

    remove(key: string): ReturnType<IStorageEngine["remove"]> {
        sessionStorage.removeItem(key);
    }

    set(key: string, value: string): ReturnType<IStorageEngine["set"]> {
        sessionStorage.setItem(key, value);
    }

}