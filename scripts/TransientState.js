const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

export const setMetal = (choice) => {
    transientState.metalId = choice
}
export const setSize = (choice) => {
    transientState.sizeId = choice
}
export const setStyle = (choice) => {
    transientState.styleId = choice
}