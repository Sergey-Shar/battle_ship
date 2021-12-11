export const getRandomBetween = (min, max) => {
    return  min + Math.floor(Math.random() * (max - min + 1))
}

export const getRandomFrom = (...args) => {
    const index = Math.floor(Math.random() * args.length)
    return args(index)
}

export const isUnderPoint = (point, item) => {
    const { left, top, width, height } = item.getBoundingClientRect() 
    const { x, y } = point
    return left <= x && x <= left + width && top <= y && y <= top + height
}

