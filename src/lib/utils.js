import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

import CryptoJS from "crypto-js";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function generateHash(data) {
    const token = "7a8afab998474ee889dd3732d5e0ae27";

    const md5 = CryptoJS.MD5(JSON.stringify(data).toString());

    const jsonEncoded = JSON.stringify([data, { key: md5 + token }]);
    const base64encoded = btoa(jsonEncoded);

    return base64encoded;
}
