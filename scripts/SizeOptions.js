export const SizeOptions = async () => {
    const response = await fetch('http://localhost:8088/sizes')
    const sizes = await response.json()

    return sizes.map((size) => {
        return `
        <label>
            <input type='radio' name='size' value='${size.id}'> ${size.carets} oz
        </label>
        `
    }).join('')
}