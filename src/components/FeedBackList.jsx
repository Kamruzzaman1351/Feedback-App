import React, { useContext } from 'react';
import FeedBack from './FeedBack';
import { AnimatePresence, motion} from "framer-motion";
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';
function FeedBackList() {
  const {feedback, isLoading} = useContext(FeedbackContext);
  if(!isLoading && (!feedback || feedback.length === 0)) {
    return <h2 style={{textAlign:"center", marginTop:"15px"}}>No Feedback Yet!</h2>
  }

  return isLoading ? <Spinner /> : (<div className='feedback-list'>
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
</div>)
 
}

export default FeedBackList