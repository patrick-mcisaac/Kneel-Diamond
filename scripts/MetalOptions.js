import { setMetalState } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch('http://localhost:8088/metals')
    const metalsData = await response.json()

    document.addEventListener('click', chooseMetal)

    let html = `
    <div class='jewelry-options'>
    `

    const metalsHTML = metalsData.map((metal) => {
        return `
        <div class='jewelry-option'>
            <input type='radio' name='metal' value='${metal.id}' id='metal-${metal.id}'>
            <label for='metal-${metal.id}'>${metal.metal}</label>
        </div>
        `
    }).join('')

    html += `
    ${metalsHTML}
    </div>
    `

    return html
}

const chooseMetal = (e) => {
    if(e.target.name === 'metal'){
        const id = parseInt(e.target.value)
        setMetalState(id)
    }
}