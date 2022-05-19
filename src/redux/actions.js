// import { createAction } from '@reduxjs/toolkit'
import { CREATE_POST, FETCHED_POSTS, HIDE_LOADER, SHOW_LOADER } from './types'

export const createPost = (post) => {      // action creator
    return {
        type: CREATE_POST,
        payload: post          // в этот payload присваивается значение передаваемое в этот экшн криейтор "post" 
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const fetchPosts = () => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const posts = await response.json()
        dispatch({
            type: FETCHED_POSTS,
            payload: posts
        })
        dispatch(hideLoader())
    }
    
}

// const createPost = createAction('CREATE_POST');