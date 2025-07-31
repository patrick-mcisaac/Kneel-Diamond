import { setStyle } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch('http://localhost:8088/styles')
    const styles = await response.json()

    document.addEventListener('click', setStyleState)

    return styles.map((style) => {
        return `
        <label>
            <input type='radio' name='style' value='${style.id}'> ${style.style}
        </label>
        `
    }).join('')
}

// function for event listener to change transient data

const setStyleState = (e) => {
    if(e.target.name === 'style'){
        const value = parseInt(e.target.value)
        setStyle(value)
    }
}