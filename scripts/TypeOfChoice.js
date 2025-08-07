import {
	setTypeState,
	getCurrentState,
	patchCurrentState
} from "./TransientState.js"

export const TypeOfChoice = async () => {
	//problem probably from mainjs
	const currentState = await getCurrentState()
	const typeId = currentState[0].type

	document.addEventListener("change", eventHandler)
	let html = `
    <section class='type-of'>
        <label>
            <input type='radio' value='1' name='typeOf' ${
				typeId === 1 ? "checked" : ""
			}>
            Ring
        </label>
        <label>
            <input type='radio' value='2' name='typeOf' ${
				typeId === 2 ? "checked" : ""
			}>
            Earring
        </label>
        <label>
            <input type='radio' value='4' name='typeOf' ${
				typeId === 4 ? "checked" : ""
			}>
            Necklace
        </label>
    </section>
    `
	return html
}

const eventHandler = async e => {
	if (e.target.name === "typeOf") {
		const value = parseInt(e.target.value)
		setTypeState(value)

		const patchData = { type: value }
		await patchCurrentState(patchData)

		const myEvent = new CustomEvent("newOrder")
		document.dispatchEvent(myEvent)
	}
}
