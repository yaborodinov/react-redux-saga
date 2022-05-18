import React from 'react'

const Post = ({post}) => {
    return(
        <div className='card mb-2'>
            <div className="card-body">
                <h5 className="card-title">{post}</h5>
            </div>
        </div>
    )
}

export default Post
