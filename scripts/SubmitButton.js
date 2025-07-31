import { updateDb } from "./TransientState.js"

export const SubmitButton = () => {

    document.addEventListener('click', submitBtn)
    return `
    <button id='submit-button'>Create Custom Order</button>
    `
}

// function for submit button
const submitBtn = (e) => {
    if(e.target.id === 'submit-button'){
        updateDb()
        const newOrder = new CustomEvent('newOrder')
        document.dispatchEvent(newOrder)
    }

}