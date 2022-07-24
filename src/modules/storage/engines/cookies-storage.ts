import { IStorageEngine, ICookiesOptions } from "../interface";

export class CookiesStorage implements IStorageEngine{
    get(key: string): ReturnType<IStorageEngine["get"]> {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    remove(key: string, opts?: ICookiesOptions): ReturnType<IStorageEngine["remove"]> {
        this.set(key, "", {
            "max-age": -1
        });
    }

    set(key: string, value: string, opts?: ICookiesOptions): ReturnType<IStorageEngine["set"]> {
        if (opts && opts.expires instanceof Date) {
            opts.expires = opts.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);

        for (let optionKey in opts) {
            updatedCookie += "; " + optionKey;
            let optionValue: boolean = false;
            if (opts) {
                // @ts-ignore
                optionValue = opts[optionKey];
            }
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
}