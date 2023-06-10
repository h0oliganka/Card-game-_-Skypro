import { cardsTableGenerate } from './cards-table.js'
import { headerRenderer } from './header.js'
export function levelPageRenderer({ app }) {
    const appHtml = `<div class="header-component"></div>
    <div class="card-field"> </div>
`
    let backSideCards = []
    for (let i = 0; i < 6 * Number(localStorage.getItem('Level')); i++) {
        backSideCards.push('<img src="./img/рубашка.svg" alt="card-backside">')
    }
    console.log(backSideCards)
    app.innerHTML = appHtml
    document.querySelector('.card-field').innerHTML = backSideCards.join('')
    setTimeout(
        () =>
            (document.querySelector('.card-field').innerHTML =
                cardsTableGenerate(backSideCards.length)),
        5000
    )
    headerRenderer({ element: document.querySelector('.header-component') })
}
