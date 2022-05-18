import { CREATE_POST } from './types'

const initialState = {
    posts: [1,2,4,55, 66],
    fetchedPosts: ['a','b']
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type){                                              // пишем кейс в редьюсере
        case CREATE_POST:
            return  {...state, posts: [...state.posts, action.payload]}     // в action.payload мы присваивали значение post в экшн криейторе createPost 
        default: return state
    }
}
