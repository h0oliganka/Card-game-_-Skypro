import { cardsTableGenerate } from './cards-table.js'
import { headerRenderer } from './header.js'
import { resultRenderer } from './finish.js'

export function levelPageRenderer({ app }) {
    const appHtml = `<div class="header-component"></div>
    <div class="card-field grid-${localStorage.getItem('Level')}"> </div>
`
    let backSideCards = []
    for (let i = 0; i < 6 * Number(localStorage.getItem('Level')); i++) {
        backSideCards.push(
            `<div class="card" data-id='${i}'><img class="card-back" src="./img/рубашка.svg" alt="card-backside"></div>`
        )
    }
    console.log(backSideCards)
    app.innerHTML = appHtml
    const cardTable = cardsTableGenerate(backSideCards.length)
    document.querySelector('.card-field').innerHTML = cardTable.join('')

    setTimeout(() => {
        document.querySelector('.card-field').innerHTML = backSideCards.join('')
        let clickedCard = []
        let controlArray = []
        let startTime = Number(new Date())
        for (const card of document.querySelectorAll('.card')) {
            card.addEventListener('click', (event) => {
                event.stopPropagation()
                clickedCard.push(cardTable[card.dataset.id])
                let targetCard = document.createElement('div')
                targetCard.innerHTML = cardTable[card.dataset.id]
                card.replaceWith(targetCard)
                if (clickedCard.length === 2) {
                    if (clickedCard[0] === clickedCard[1]) {
                        controlArray.push('win')
                        clickedCard = []
                    } else {
                        let finishTime = Number(new Date())
                        let fullGameTime = (finishTime - startTime) / 1000
                        resultRenderer({ app }, 'dead', fullGameTime)
                    }
                }
                if (
                    controlArray.length === 3 * Number(localStorage.getItem('Level'))
                ) {
                    let finishTime = Number(new Date())
                    let fullGameTime = (finishTime - startTime) / 1000
                    resultRenderer({ app }, 'win', fullGameTime)
                }
            })
        }
    }, 5000)
    headerRenderer({ element: document.querySelector('.header-component') })
}
