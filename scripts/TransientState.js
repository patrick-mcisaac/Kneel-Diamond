// establish initial state

const orderState = {
	metalId: 0,
	sizeId: 0,
	styleId: 0,
	type: 1
}

export const getCurrentState = async () => {
	const response = await fetch("http://localhost:8088/currentState")
	const currentState = await response.json()

	return currentState
}

export const setTypeState = chosen => {
	orderState.type = chosen
}

export const setMetalState = chosen => {
	orderState.metalId = chosen
}

export const setSizeState = chosen => {
	orderState.sizeId = chosen
}

export const setStyleState = chosen => {
	orderState.styleId = chosen
}

export const placeOrder = async () => {
	if (
		orderState.metalId > 0 &&
		orderState.sizeId > 0 &&
		orderState.styleId > 0
	) {
		const postOptions = {
			method: "POST",
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify(orderState)
		}

		await fetch("http://localhost:8088/orders", postOptions)

		orderState.metalId = 0
		orderState.sizeId = 0
		orderState.styleId = 0
		orderState.type = 1

		await patchCurrentState(orderState)

		const myEvent = new CustomEvent("newOrder")
		document.dispatchEvent(myEvent)
	} else {
		window.alert("NOPE")
	}
}

// send patch to currentState
export const patchCurrentState = async data => {
	await fetch(`http://localhost:8088/currentState/1`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
}
