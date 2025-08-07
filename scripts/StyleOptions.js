import {
	setStyleState,
	getCurrentState,
	patchCurrentState
} from "./TransientState.js"

export const StyleOptions = async () => {
	const response = await fetch(`http://localhost:8088/styles`)
	const styles = await response.json()

	const currentState = await getCurrentState()
	const styleId = currentState[0].styleId

	document.addEventListener("click", chooseStyle)

	let html = `
    <div class='jewelry-options'>
    `

	const stylesHTML = styles
		.map(style => {
			return `
        <div class='jewelry-option'>
            <input type='radio'
					name='style'
					value='${style.id}'
					id='style-${style.id}'
					${style.id === styleId ? "checked" : ""}>
            <label for='style-${style.id}'>${style.style}</label>
        </div>
        `
		})
		.join("")

	html += `
    ${stylesHTML}
    </div>
    `

	return html
}

const chooseStyle = async e => {
	if (e.target.name === "style") {
		const id = parseInt(e.target.value)
		setStyleState(id)

		const patchData = { styleId: id }
		await patchCurrentState(patchData)

		const myEvent = new CustomEvent("newOrder")
		document.dispatchEvent(myEvent)
	}
}
