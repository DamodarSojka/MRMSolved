export function groupBy(objects, key) {
    const result = {};

    objects.forEach((object) => {
        const type = object[key];

        // if key is not yet 'discovered' add it to the result object
        // if all possible keys would be known this would be unnecessary
        if(!result[type]){
            result[type] = [];
        }

        result[type].push(object);
    });

    return result;
}

export function groupBySex(people) {
    return groupBy(people, 'sex');
}

export function groupByYearThenSex(people) {
    const byYear = groupBy(people, 'born');

    // byYear is an object, transform its keys into an array in order to iterate over whole object
    Object.keys(byYear).forEach((year) => {
        byYear[year] = groupBySex(byYear[year]);
    });

    return byYear;
}
