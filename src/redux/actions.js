// import { createAction } from '@reduxjs/toolkit'
import { CREATE_POST } from './types'

export const createPost = ({post}) => {      // action creator
    return {
        type: CREATE_POST,
        payload: post
    }
}

// const createPost = createAction('CREATE_POST');