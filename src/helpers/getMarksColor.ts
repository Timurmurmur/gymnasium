export const getMarkColor = (mark: number) => {
    switch (mark) {
        case 5: {
            return "shape-green"
        }
        case 4: {
            return "shape-purple"
        }
        case 3: {
            return "shape-orange"
        }
        case 2: {
            return "shape-red"
        }
        default: {
            return "shape-red"
        }
    }
}