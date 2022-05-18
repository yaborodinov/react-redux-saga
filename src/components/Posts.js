import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({syncPosts}) => {
	return(
		<div className='text-center mt-3'>
			{syncPosts.length ===0 ?
			<h3 className='h5'><i>no Posts...</i></h3> :
			syncPosts.map((post, index) => <Post title={post.title} key={post.id}/>)}
		</div>
	)
}

const mapStateToProps = state =>  {   // преобразовывает state в пропсы
	return{
		syncPosts: state.posts.posts   // вытягиваем из state массив posts и создаем для него пропс syncPosts
	} 
}        

export default connect(mapStateToProps, null)(Posts)
