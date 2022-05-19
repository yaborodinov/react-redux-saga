import React from 'react'
import { connect } from 'react-redux'
import {createPost, showAlert, hideAlert } from '../redux/actions'
import Alert from './Alert'
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

        if (title.trim()) {
            this.props.createPost(newPost)
        } else {
            this.props.showAlert('Post can not be empty string')
        }
        
        this.setState({title: ''})
    }

    changeInputHandler = (e) => {
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
        this.props.hideAlert()
    }
    render() {
        return(
            <>
                {this.props.alert && <Alert text={this.props.alert}/>}
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
            </>
            
        )
        
    }
}

const mapDispatchToProps = {       // мапим функцию dispatch на пропсы
    createPost,
    showAlert,
    hideAlert
}

const mapStateToProps = state => {
    return {
        alert: state.app.alert       // app это название редьюсера в rootReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)     // первый параметр сейчас это созданный проп alert; второй параметр - функция диспатч
