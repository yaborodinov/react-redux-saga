// import { createAction } from '@reduxjs/toolkit'
import { CREATE_POST } from './types'

export const createPost = ({post}) => {      // action creator
    return {
        type: CREATE_POST,
        payload: post          // в этот payload присваивается значение передаваемое в этот экшн криейтор "post" 
    }
}

// const createPost = createAction('CREATE_POST');