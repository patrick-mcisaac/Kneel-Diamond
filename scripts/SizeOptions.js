import { setSize } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch('http://localhost:8088/sizes')
    const sizes = await response.json()

    document.addEventListener('click', setSizeOptions)

    return sizes.map((size) => {
        return `
        <label>
            <input type='radio' name='size' value='${size.id}'> ${size.carets} oz
        </label>
        `
    }).join('')
}

// function for event listener to change transient data

const setSizeOptions = (e) => {
    if(e.target.name === 'size'){
        const value = parseInt(e.target.value)
        setSize(value)
    }
}