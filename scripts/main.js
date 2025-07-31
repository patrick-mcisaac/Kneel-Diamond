import { MetalOptions } from "./MetalOptions.js"
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"
import { SubmitButton } from "./SubmitButton.js"
import { Orders } from "./customOrders.js"

const header = document.getElementById('header')
const container = document.getElementById('container')

const render = async () => {
    const metalsHTML = await MetalOptions()
    const sizesHTML = await SizeOptions()
    const stylesHTML = await StyleOptions()
    const submitBtnHTML = SubmitButton()
    const ordersHTML = await Orders()

    header.innerHTML = '<h1>Kneel Diamonds</h1>'
    let html = `
    <section class='survey-section'>
        <article class='survey-options'>
            <h2>Metals</h2>
            ${metalsHTML}
        </article>

        <article class='survey-options'>
            <h2>Sizes</h2>
            ${sizesHTML}
        </article>

        <article class='survey-options'>
            <h2>Styles</h2>
            ${stylesHTML}
        </article>

        ${submitBtnHTML}

    </section>

    <section class='orders-section'>
        <h2>Custom Jewelry Orders</h2>
        ${ordersHTML}
    </section>
    `

    container.innerHTML = html
}

render()

document.addEventListener('newOrder', render)