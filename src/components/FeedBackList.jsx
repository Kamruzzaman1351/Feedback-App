import React from 'react'
import FeedBack from './FeedBack'
import PropTypes from 'prop-types'
function FeedBackList({feedback}) {
  return (
    <div>
        {feedback.map(item =>
            <FeedBack key={item.id} item={item} />
        )}
    </div>
  )
}
FeedBackList.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedBackList