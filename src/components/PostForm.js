import React from 'react'
import { connect } from 'react-redux'
import {createPost} from '../redux/actions'
class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault()

        const {title} = this.state

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)
        
        this.setState({title: ''})
    }

    changeInputHandler = (e) => (
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    )
    render() {
        return(
            <form onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <label className='mb-2' htmlFor="title">Post Title</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        id="title"
                        placeholder="Type..."
                        name='title'
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type='submit'>Create</button>
            </form>
        )
        
    }
}

const mapDispatchToProps = {       // мапим функцию dispatch на пропсы
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)     // первый параметр что щас null - это state ; второй параметр - функция диспатч
