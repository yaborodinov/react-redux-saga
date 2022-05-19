import React from 'react'

const Post = ({title}) => {
    return(
        <div className='card mb-2 border-info shadow-sm'>
            <div className="card-body p-1">
                <h5 className="card-title mb-0 ">{title}</h5>
            </div>
        </div>
    )
}

export default Post
