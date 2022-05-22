import React, { useContext } from 'react';
import FeedBack from './FeedBack';
import { AnimatePresence, motion} from "framer-motion";
import FeedbackContext from '../context/FeedbackContext';
function FeedBackList() {
  const {feedback} = useContext(FeedbackContext);
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
              <FeedBack key={item.id} item={item} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedBackList