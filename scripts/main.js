import { MetalOptions } from "./MetalOptions.js";
import { StyleOptions } from "./StyleOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { OrderBtn } from "./PlaceOrder.js";
import { Orders } from "./DisplayOrders.js";

const container = document.getElementById("container")

const render = async () => {
    const metalsHTML = await MetalOptions()
    const stylesHTML = await StyleOptions()
    const sizeHTML = await SizeOptions()
    const orderBtnHTML = OrderBtn()
    const ordersHTML = await Orders()

    const composedHTML = `
    <h1>Kneel Diamonds</h1>
    
    <article class='choices'>
        <section class='choices-metals options'>
            <h2>Metals</h2>
            ${metalsHTML}
        </section>
    </article>
    <article class='choices'>
        <section class='choices-sizes options'>
            <h2>Sizes</h2>
            ${sizeHTML}
        </section>
    </article>
    <article class='choices'>
        <section class='choices-styles options'>
            <h2>Styles</h2>
            ${stylesHTML}
        </section>
    </article>

    <article class='order'>
        ${orderBtnHTML}
    </article>

    <article class='customOrders'>
        <h2>Custom Jewelry Orders</h2>
        ${ordersHTML}
    </article>

    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener('newOrder', () => {
    console.log('state has changed. Regenerating HTML ...')
    render()
})