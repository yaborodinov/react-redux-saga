import { showAlert } from './actions'
import { CREATE_POST } from './types'

const forbidden = ['pen', 'ball', 'car']

export const forbiddenWordsMiddleware = ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (action.type === CREATE_POST) {    //когда мы создаем пост
                const found = forbidden.filter(w => action.payload.title.includes(w))           // то мы проверяем массив на совпадение с введенным словом, которое находится в action.payload.title
                if (found.length){
                   return dispatch(showAlert(`word "${found[0]}" is unacceptably`))      // если длина массива found больше 0 то возвращаем диспатч с алертом
                }
            }
            return next(action)      // иначе просто вернем это
        }
    }

}