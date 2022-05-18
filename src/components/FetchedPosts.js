import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Post from './Post'

const FetchedPosts = () => {

	const dispatch = useDispatch()    // диспатч с помощбю хука
	const posts = useSelector(state => state.posts.fetchedPosts)       // с помощью этого хука достаем из store посты
	return(
		<div className='text-center mt-3'>
			{posts.length === 0 ?
			<button
			className='btn btn-primary'
			onClick={() => dispatch(fetchPosts())}          // в диспатч передаем экшн
			>Fetch posts</button> :
			posts.map((post) => <Post title={post.title} key={post.id}/>)}
		</div>
	)
}

export default FetchedPosts
