export function filterNames(names, startsWith){
    return names.filter((name) => {
        return name.startsWith(startsWith);
    });
}

// as a side note, I have understand that question differently and only after looking at tests it has made sense
export function objectFilter(objects, key, searchString) {
    return objects.filter((object) => {
        return object[key] === searchString;
    });
}
// I assume I don't need to handle badly formatted strings nor objects not valid for the given string
export function compoundObjectFilter(objects, keysString, searchString) {
    const keys = keysString.split('.');
    return objects.filter((object) => {
        keys.forEach((key) => {
            object = object[key];
        });
        return object === searchString;
    });
}
