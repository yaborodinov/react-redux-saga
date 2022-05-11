import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault()

        const {title} = this.state

        const post = {
            title,
            id: Date.now().toString()
        }
        console.log(post);
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
