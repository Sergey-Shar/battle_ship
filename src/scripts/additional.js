export const getRandomBetween = (min, max) => {
    return  min + Math.floor(Math.random() * (max - min + 1))
}

export const getRandomFrom = (...args) => {
    const index = Math.floor(Math.random() * args.length)
    return args[index]
}

export const isUnderPoint = (point, item) => {
    const { left, top, width, height } = item.getBoundingClientRect() 
    const { x, y } = point
    return left <= x && x <= left + width && top <= y && y <= top + height
}

export const addListener = (element, ...args) => {
    element.addEventListener(...args)
    return () => element.removeEventListener(...args)
}

export const getRandomSeveral = (array = [], size = 1) => {
	array = array.slice();

	if (size > array.length) {
		size = array.length;
	}

	const result = [];

	while (result.length < size) {
		const index = Math.floor(Math.random() * array.length);
		const item = array.splice(index, 1)[0];
		result.push(item);
	}

	return result;
}



