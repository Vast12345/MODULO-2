function groupBy(array, callback) {
    const group = new Object();

    array.forEach((item) => {
        const key = callback(item);

        if (!group[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);
    });
    return group
}

// Example of how to use the function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const groupByResult = groupBy(numbers, (num) => num % 2 === 0 ? 'even' : 'odd');
console.log(groupByResult);

const array = [
    {"id": "1"},
    {"id": "1"},
    {"id": "2"}
];

const groupedArray = groupBy(array, (object) => object.id);
console.log(groupByArray);