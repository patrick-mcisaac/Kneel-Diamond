import { placeOrder } from "./TransientState.js"

export const OrderBtn = () => {

    document.addEventListener('click', submitPost)

    let html = `
    <button id='place-order'>Place Order</button>
    `
    return html
}

const submitPost = (e) => {
    if(e.target.id === 'place-order'){
        placeOrder()
    }
}