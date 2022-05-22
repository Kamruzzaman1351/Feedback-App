import Card from "./shared/Card"
import Button from "./shared/Button"
import SelectList from "./SelectList"
import {useState, useContext, useEffect} from "react"
import{AnimatePresence, motion} from "framer-motion"
import FeedbackContext from "../context/FeedbackContext"
function FeedBackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);
    const [btnText, setBtnText] = useState("Send");
    useEffect(() => {
        if(feedbackEdit.edit === true){
            setIsDisabled(false);
            setText(feedbackEdit.item.feedback);
            setRating(feedbackEdit.item.rating);
            setBtnText("Update");
            
        } 
    }, [feedbackEdit]);

    const handleInputChange = (e) => {        
        if(text === '') {
            setMessage(null);
            setIsDisabled(true);
        } else if(text !== '' && text.trim().length <=10) {
            setMessage("Feedback should be at list 10 charter")
            setIsDisabled(true);
        } else {
            setMessage(null);
            setIsDisabled(false);
        }
        setText(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length >=10) {
            const newFeedback = {
                rating: rating,
                feedback: text,
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else{
                addFeedback(newFeedback);
            }
            setText('');
            setIsDisabled(true);
            setRating(10);
            setBtnText("Send")
        } else {
            setMessage("Feedback should be at list 10 charter")
            setIsDisabled(true);
        }
    }
  return (
    <AnimatePresence>
            <Card>
                <form 
                    onSubmit={handleFormSubmit}>
                    <h3>How would you like to rate our service?</h3>
                    <SelectList 
                        selected={rating}
                        select={(selected) => setRating(selected)}
                    />
                    <div className="input-group ">
                        <input 
                            type="text" 
                            placeholder="Your Feedback" 
                            value={text} 
                            onChange={handleInputChange}
                        />
                        <Button type="submit" version="secondary" isDisabled={isDisabled}> {btnText} </Button>                
                    </div>
                    {message && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.9}} className="message">{message}</motion.div>}                    
                </form>
            </Card>        
    </AnimatePresence>
  )
}

export default FeedBackForm