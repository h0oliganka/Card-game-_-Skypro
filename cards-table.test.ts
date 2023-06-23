import { describe, expect, it } from '@jest/globals'
import { cardsTableGenerate } from './cards-table'

describe('cards-table', () => {
    describe('cards-table-array', () => {
        it('should target array length for levels', () => {
            for (let level = 1; level < 4; level++) {
                const suitArray = ['Ч', 'П', 'Б', 'К']
                const cardValueArray = [
                    'A',
                    'K',
                    'Q',
                    'J',
                    '10',
                    '9',
                    '8',
                    '7',
                    '6',
                ]
                const cards: string[] = []

                for (const suit of suitArray) {
                    for (const value of cardValueArray) {
                        cards.push(suit + value)
                    }
                }
                expect(cardsTableGenerate(level * 6, cards)).toHaveLength(
                    level * 6
                )
            }
        })
    })
})
