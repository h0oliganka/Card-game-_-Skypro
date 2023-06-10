import { cards } from './index.js'

export function cardsTableGenerate(value) {
    const randomCards = []
    for (let i = 0; i < value / 2; i++) {
        randomCards.push(
            cards[Math.round(0 - 0.5 + Math.random() * (35 - 0 + 1))]
        )
    }
    const gameCardSet = randomCards
        .concat(randomCards)
        .sort(() => 0.5 - Math.random())
    console.log(gameCardSet)
    const cardsTable = gameCardSet
        .map((card) => {
            let suit
            switch (card.charAt(0)) {
                case 'П':
                    suit = './img/piki.svg'
                    break
                case 'Ч':
                    suit = './img/cher.svg'
                    break
                case 'Б':
                    suit = './img/bubna.svg'
                    break
                case 'К':
                    suit = './img/chrest.svg'
                    break
                default:
                    break
            }
            return `<div class="card">
            <p class="card-value-up">${card.slice(1)}</p>
            <p class="card-value-down">${card.slice(1)}</p>
            <img src="${suit}" alt="pik" class="suit-big">
            <img src="${suit}" alt="pik" class="suit-small-up">
            <img src="${suit}" alt="pik" class="suit-small-down">
        </div>`
        })
        .join('')
    return cardsTable
}
