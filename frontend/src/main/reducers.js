import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipa às 10h',
            done: false
        }, {
            _id: 4,
            description: 'Consulta médica na terça depois do almoço',
            done: false
        }]
    })
})

export default rootReducer