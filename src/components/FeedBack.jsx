import React,{ useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from "react-icons/fa"
import {motion} from "framer-motion"
import FeedbackContext from '../context/FeedbackContext'
function FeedBack({item}) {
const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <div>
        <Card>
            <div className="num-display">{item.rating}</div>
            <motion.button 
              whileHover={{scale:1.3}} 
              className='edit'
              onClick={() => editFeedback(item)} 
            >
              <FaEdit color='green'/>
            </motion.button>
            <motion.button 
              whileHover={{scale:1.3}} 
              className='close' 
              onClick={() => deleteFeedback(item.id)}>
              <FaTimes color='red'/>
            </motion.button>
            <div className="text-display">{item.feedback}</div>             
        </Card>
    </div>
  )
}

FeedBack.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedBack