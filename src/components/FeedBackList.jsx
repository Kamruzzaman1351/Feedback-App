import React from 'react'
import FeedBack from './FeedBack'
import PropTypes from 'prop-types'
function FeedBackList({feedback, handleDelete}) {
  return (
    <div>
        {feedback.map(item =>
            <FeedBack key={item.id} item={item} handleDelete={handleDelete}/>
        )}
    </div>
  )
}
FeedBackList.propTypes = {
    feedback: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default FeedBackList