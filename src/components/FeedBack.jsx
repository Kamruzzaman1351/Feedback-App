import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
function FeedBack({item}) {
  return (
    <div>
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.feedback}</div>             
        </Card>
    </div>
  )
}

FeedBack.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedBack