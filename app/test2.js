export function capitalise(names){
    return names.map((name) => {
        return name.toUpperCase();
    });
}

export function extractValue(objects, key) {
    return objects.map((object) => {
        return object[key];
    });
}

export function extractCompoundValue(objects, keysString) {
    const keys = keysString.split('.');
    return objects.map((object) => {
        keys.forEach((key) => {
            object = object[key];
        });
        return object;
    });
}
