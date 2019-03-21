import React from 'react'

const Message = ({ pseudo, message }) => {
    return(
        <p className='user-message'>
          {message}
        </p>
    )
}

export default Message