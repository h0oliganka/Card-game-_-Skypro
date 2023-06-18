import { renderApp } from '.';

export function headerRenderer({ element }: { element: HTMLElement }) {
    element.innerHTML = `<header class="header">
    <div class="timer">
        <div class="timer-min">
            <div class="timer-name">min</div>
            <div class="timer-counter">00</div>
        </div>
        <div class="timer-sec">
            <div class="timer-name">sec</div>
            <div class="point timer-counter">00</div>
        </div>
    </div>
    <button type="submit" class="restart-button">
        Начать заново
    </button>
    </header>`
    ;(
        document.querySelector('.restart-button') as HTMLElement
    ).addEventListener('click', () => renderApp('level'));
}
