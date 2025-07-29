import { setSizeState } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch('http://localhost:8088/sizes')
    const sizes = await response.json()

    document.addEventListener('click', chooseSize)

    let html = `
        <div class='jewelry-options'>
    `

    const sizeHTML = sizes.map((size) => {
        return `
        <div class='jewelry-option'>
            <input type='radio' name='size' value='${size.id}' id='size-${size.id}'>
            <label for='size-${size.id}'>${size.carets} carets</label>
        </div>
        `
    }).join('')

    html += `
    ${sizeHTML}
    </div>
    `

    return html
}


const chooseSize = (e) => {
    if(e.target.name === 'size'){
        const id = parseInt(e.target.value)
        setSizeState(id)
    }

} 
