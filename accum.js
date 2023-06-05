const accum = (str) => {
	const chars = str.split('');
	const lowerCasesChars = chars.map(c => c.toLowerCase());

	return lowerCasesChars.reduce((acc, val, i) => {
		const value = `${val.toUpperCase()}${val.repeat(i)}`;
		acc.push(value);
		return acc;
	}, []).join('-');
}