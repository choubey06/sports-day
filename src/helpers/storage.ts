const hasLocalStorage = "localStorage" in global;

export const getItem = (name: string, ifNotFound: Array<object> | object | null = null) => {
    if (!hasLocalStorage) {
        return ifNotFound;
    }
    let value = localStorage.getItem(name) || "";
    try {
        value = JSON.parse(value);
    } catch (e) {
        /* do nothing */
    }
    return value || ifNotFound;
};

export const setItem = (name: string, value: object = {}) => {
    if (!hasLocalStorage) {
        return false;
    }
    localStorage.setItem(name, JSON.stringify(value));
    return true;
};

export const removeItem = (name: string) => {
    if (!hasLocalStorage) {
        return false;
    }
    return localStorage.removeItem(name);
};
