const filterNum = (data) => {
	const numbers = data.filter(el => Number.isInteger(el));
	numbers.sort((a, b) => {
			if (a < b) {
					return -1;
				}
				if (a > b) {
					return 1;
				}
				return 0;
	});
	return numbers;
}
  