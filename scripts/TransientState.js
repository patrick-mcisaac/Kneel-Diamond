// establish initial state

const orderState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

export const setMetalState = (chosen) => {
    orderState.metalId = chosen
}

export const setSizeState = (chosen) => {
    orderState.sizeId = chosen
}

export const setStyleState = (chosen) => {
    orderState.styleId = chosen
}

export const placeOrder = async () => {

    if (orderState.metalId > 0 && orderState.sizeId > 0 && orderState.styleId > 0 ) {

        const postOptions = {
            method: 'POST',
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(orderState)
        }
    
        await fetch('http://localhost:8088/orders', postOptions)
    
        const myEvent = new CustomEvent('newOrder')
        document.dispatchEvent(myEvent)
    }else {
        window.alert('NOPE')
    }
}