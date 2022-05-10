import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return(
            <form>
                <div className="form-group">
                    <label className='mb-2' htmlFor="title">Post Title</label>
                    <input type="text" className="form-control mb-2" id="title" placeholder="Type..."/>
                </div>
                <button class="btn btn-success" type='submit'>Create</button>
            </form>
        )
        
    }
}
