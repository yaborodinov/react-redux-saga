import React from 'react'
import Post from './Post'

export default ({posts}) => {
	return(
		<div className='text-center mt-3'>
			{posts.length === 0 ?
			<button className='btn btn-primary'>Fetch posts</button> :
			posts.map((post, index) => <Post post={post} key={post + index}/>)}
		</div>
	)
}
