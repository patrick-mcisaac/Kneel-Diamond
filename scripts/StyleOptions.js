export const StyleOptions = async () => {
    const response = await fetch('http://localhost:8088/styles')
    const styles = await response.json()

    return styles.map((style) => {
        return `
        <label>
            <input type='radio' name='style' value='${style.id}'> ${style.style}
        </label>
        `
    }).join('')
}