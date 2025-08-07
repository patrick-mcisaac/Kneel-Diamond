import { setTypeState } from "./TransientState.js"

export const TypeOfChoice = () => {
	document.addEventListener("change", eventHandler)
	let html = `
    <section class='type-of'>
        <label>
            <input type='radio' value='1' name='typeOf'>
            Ring
        </label>
        <label>
            <input type='radio' value='2' name='typeOf'>
            Earring
        </label>
        <label>
            <input type='radio' value='4' name='typeOf'>
            Necklace
        </label>
    </section>
    `
	return html
}

const eventHandler = e => {
	if (e.target.name === "typeOf") {
		const value = parseInt(e.target.value)
		setTypeState(value)
	}
}
