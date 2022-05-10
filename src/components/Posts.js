import React from 'react'
import Post from './Post'

export default ({posts}) => {
	return(
		<div className='text-center mt-3'>
			{posts.length ===0 ?
			<h3 className='h5'><i>no Posts...</i></h3> :
			posts.map((post, index) => <Post post={post} key={post+index}/>)}
		</div>
	)
}
