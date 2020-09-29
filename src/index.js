exports.min = function min(array) {
    if (Array.isArray(array) && array.length) {
        return Math.min(...array);
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length) {
        return Math.max(...array);
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    let total = 0;
    if (Array.isArray(array) && array.length) {
        array.forEach(element => {
            total += element;
        });
    } else {
        return 0;
    }
    return (total / array.length);
}