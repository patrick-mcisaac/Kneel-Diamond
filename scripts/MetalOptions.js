import { setMetal } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch('http://localhost:8088/metals')
    const metals = await response.json()

    document.addEventListener('change', selectMetal)

    return metals.map((metal) => {
        return `
        <label>
            <input type='radio' name='metal' value='${metal.id}'> ${metal.metal}
        </label>
        `
    }).join('')
}
// function for event listener to change state
const selectMetal = (e) => {
    // check name
    if(e.target.name === 'metal'){
        const value = parseInt(e.target.value)
        // update state
        setMetal(value)
    }

}