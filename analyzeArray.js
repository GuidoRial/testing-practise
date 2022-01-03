const analyzeArray = (array) => {
    let sortArray = function (array) {
        array.sort((a, b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
    };
    return {
        average: array.reduce((accum, curr) => accum + curr) / array.length,
        min: array.sort((a, b) => a - b)[0],
        max: array.sort((a, b) => b - a)[0],
        length: array.length,
    };
};

module.exports = analyzeArray;
