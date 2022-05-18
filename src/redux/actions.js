// import { createAction } from '@reduxjs/toolkit'
import { CREATE_POST, FETCHED_POSTS } from './types'

export const createPost = (post) => {      // action creator
    return {
        type: CREATE_POST,
        payload: post          // в этот payload присваивается значение передаваемое в этот экшн криейтор "post" 
    }
}

export const fetchPosts = () => {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const posts = await response.json()
        dispatch({
            type: FETCHED_POSTS,
            payload: posts
        })
    }
    
}

// const createPost = createAction('CREATE_POST');