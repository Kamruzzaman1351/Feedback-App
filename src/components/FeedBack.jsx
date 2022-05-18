import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from "react-icons/fa"
function FeedBack({item, handleDelete}) {
  return (
    <div>
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => handleDelete(item.id)}>
                <FaTimes color='red'/>
            </button>
            <div className="text-display">{item.feedback}</div>             
        </Card>
    </div>
  )
}

FeedBack.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
export default FeedBack