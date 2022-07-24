export interface IStorageEngine {
    get(key: string): CanPromise<Nullable<string>>;
    set(key: string, value: string, opts?: ICookiesOptions): CanPromise<void>;
    remove(key: string, opts?: ICookiesOptions): CanPromise<void>;
}

export interface ICookiesOptions {
    expires?: string | Date;
    ['max-age']?: number;
    secure?: boolean;
    domain?: string;
    path?: string;
}

export interface IStorageOptions {
    engine?: IStorageEngine;
}