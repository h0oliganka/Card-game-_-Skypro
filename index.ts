import { START_PAGE, LEVEL_PAGE } from './routes'
import { startPageRenderer } from './start-page'
import { levelPageRenderer } from './level-render'
import './style.css'

const suitArray = ['Ч', 'П', 'Б', 'К']
const cardValueArray = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6']
export const cards: string[] = []

for (const suit of suitArray) {
    for (const value of cardValueArray) {
        cards.push(suit + value)
    }
}

export function renderApp(page) {
    const app = document.getElementById('app') as HTMLElement;
    if (page === START_PAGE) {
        startPageRenderer({ app })
    }
    if (page === LEVEL_PAGE) {
        levelPageRenderer({ app })
    }
}
renderApp(START_PAGE)
