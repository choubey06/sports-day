export const debounce = (functionToDebounce, delay) => {
    let timer: NodeJS.Timeout | undefined;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => functionToDebounce(...args), delay);
    };
};
