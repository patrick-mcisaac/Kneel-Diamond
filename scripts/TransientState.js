const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

export const setMetal = (choice) => {
    transientState.metalId = choice
    console.log(transientState)
}
export const setSize = (choice) => {
    transientState.sizeId = choice
    console.log(transientState)
}
export const setStyle = (choice) => {
    transientState.styleId = choice
    console.log(transientState)
}

// POST

export const updateDb = async () => {

    if(transientState.metalId > 0 && transientState.sizeId > 0 && transientState.styleId > 0){

        const response = await fetch('http://localhost:8088/orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(transientState)
         })
    }else {
        window.alert('Make Selection')
    }

}