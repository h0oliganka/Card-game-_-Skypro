import { renderApp } from './index'

export function startPageRenderer({ app }) {
    const appHtml = `<div class="level-choice-wrapper">
    <div class="level-choice">
        <p class="level-choice-text">Выбери сложность</p>
        <div class="radio-toolbar">
            <input type="radio" id="radio1" name="radios" value="1">
            <label class="radio-toolbar-value" for="radio1">1</label>

            <input type="radio" id="radio2" name="radios" value="2">
            <label class="radio-toolbar-value" for="radio2">2</label>

            <input type="radio" id="radio3" name="radios" value="3">
            <label class="radio-toolbar-value" for="radio3">3</label>
        </div>
        <button type="submit" class="start-button">Старт</button>
    </div>
</div>`

    app.innerHTML = appHtml

    for (const input of (document.querySelectorAll('input') as any)) {
        input.addEventListener('click', () => {
            localStorage.setItem('Level', `${input.value}`)
        })
    }

    (document.querySelector('.start-button')as HTMLElement).addEventListener('click', () => {
        renderApp('level')
    })
}
