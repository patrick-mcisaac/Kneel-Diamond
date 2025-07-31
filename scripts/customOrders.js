// show html for orders

export const Orders = async () => {
    const response = await fetch('http://localhost:8088/orders?_expand=style&_expand=size&_expand=metal')
    const orders = await response.json()

    if(orders.length){
        return orders.map((order) => {
            return `
            <article class='orders'>
                <p>Order #${order.id} cost <span class='priceSpan'>$${(order.metal.price + order.style.price + order.size.price).toFixed(2)}</span> </p>
            </article>
            `
        }).join('')
    }else {
        return ''
    }
}