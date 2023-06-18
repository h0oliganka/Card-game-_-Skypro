import { renderApp } from './index.js'
import { time } from './time.js'

export function resultRenderer({ app }, result, fullGameTime) {
    app.appendChild(document.createElement('div')).classList.add('opacity')
    app.appendChild(document.createElement('div')).classList.add('result')
    (document.querySelector('.result')).innerHTML = `
        <img src="${
            result === 'win' ? './img/win.svg' : './img/dead.svg'
        }" class="result-svg" alt="win">
        <p class="result-text-header">${
            result === 'win' ? 'Вы победили!' : 'Вы проиграли!'
        }</p>
        <p class="result-text-timer">Затраченное время:</p>
        <p class="result-text-time">${time(fullGameTime)}</p>
        <button type="submit" class="restart-button">Играть снова</button>
        `
    for (const button of document.querySelectorAll('.restart-button') as any) {
        button.addEventListener('click', () => renderApp('start'))
    }
}