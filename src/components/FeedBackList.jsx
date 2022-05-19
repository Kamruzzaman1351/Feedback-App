import React from 'react'
import FeedBack from './FeedBack'
import PropTypes from 'prop-types'
import { AnimatePresence, motion} from "framer-motion"
function FeedBackList({feedback, handleDelete}) {
  return (
    // <div>
    //     {feedback.map(item =>
    //         <FeedBack key={item.id} item={item} handleDelete={handleDelete}/>
    //     )}
    // </div>
    <div className='feedback-list'>
       <AnimatePresence>
          {feedback.map(item =>(
            <motion.div 
              key={item.id}
              whileHover={{scale:1.08}}
              initial={{opacity: 0}}
              animate={{opacity: 1,}}
              exit={{opacity: 0}}
              transition={{duration:1}}>
              <FeedBack key={item.id} item={item} handleDelete={handleDelete}/>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  )
}
FeedBackList.propTypes = {
    feedback: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default FeedBackList