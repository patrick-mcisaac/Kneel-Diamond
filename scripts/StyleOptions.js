import { setStyleState } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch(`http://localhost:8088/styles`)
    const styles = await response.json()

    document.addEventListener('click', chooseStyle)

    let html = `
    <div class='jewelry-options'>
    `

    const stylesHTML = styles.map((style) => {
        return `
        <div class='jewelry-option'>
            <input type='radio' name='style' value='${style.id}' id='style-${style.id}'>
            <label for='style-${style.id}'>${style.style}</label>
        </div>
        `
    }).join('')

    html+= `
    ${stylesHTML}
    </div>
    `

    return html
}

const chooseStyle = (e) => {
    if(e.target.name === 'style'){
        const id = parseInt(e.target.value)
        setStyleState(id)
    }
} 