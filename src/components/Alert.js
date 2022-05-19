import React from 'react'

const Alert = ({text}) => {
    return (
        <div className="alert alert-danger alert-custom" role="alert">
            {text}
        </div>
    )
}

export default Alert
