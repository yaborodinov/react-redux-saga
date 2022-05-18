import { CREATE_POST, FETCHED_POSTS } from './types'

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type){                                              // пишем кейс в редьюсере
        case CREATE_POST:
            return  {...state, posts: [...state.posts, action.payload]}     // в action.payload мы присваивали значение post в экшн криейторе createPost 
        case FETCHED_POSTS:
            return {...state, fetchedPosts: action.payload}              // асинхронные посты взятые из сервера просто будем вставлять
        default: return state
    }
}
