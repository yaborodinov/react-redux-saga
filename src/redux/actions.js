// import { createAction } from '@reduxjs/toolkit'
import { CREATE_POST, FETCHED_POSTS, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER } from './types'

export const createPost = (post) => {      // action creator
    return {
        type: CREATE_POST,
        payload: post          // в этот payload присваивается значение передаваемое в этот экшн криейтор "post" 
    }
}

//loader

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

// alert

export const showAlert = (text) => {
    return {
        type: SHOW_ALERT,
        payload: text
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}

//fetchedPosts

export const fetchPosts = () => {
return {
    type: REQUEST_POSTS
}

    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //     const posts = await response.json()
    //     dispatch({
    //         type: FETCHED_POSTS,
    //         payload: posts
    //     })
    //     dispatch(hideLoader())
    //     } catch (error) {
    //         dispatch(showAlert(error.message))
    //         dispatch(hideLoader())
    //     }
        
    // }
}
