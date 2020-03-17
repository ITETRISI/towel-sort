// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        matrix.forEach((element, i) => {
            result = result.concat((i + 1) % 2 === 0 ? element.reverse() : element);
        });
        return result;
	}
	return []
}