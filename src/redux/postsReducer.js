import { CREATE_POST } from './types'

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type){                                              // пишем кейс в редьюсере
        case CREATE_POST:
            return  {...state, posts: [...state.posts, action.payload]}     // в action.payload мы присваивали значение post в экшн криейторе createPost 
        default: return state
    }
}
