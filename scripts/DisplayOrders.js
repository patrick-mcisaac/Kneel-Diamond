export const Orders = async () => {
	const response = await fetch(
		"http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style"
	)
	const orders = await response.json()

	let html = `
        <div class='orders'>
    `

	const orderHTML = orders
		.map(order => {
			const orderPrice = order.type
				? (order.metal.price + order.style.price + order.size.price) *
				  order.type
				: order.metal.price + order.style.price + order.size.price
			return `
        <div>
            <p>Order # ${order.id}</p>
            <p>Cost $${orderPrice}</p>
        </div>
        `
		})
		.join("")

	html += `
    ${orderHTML}
    </div>
    `
	return html
}
