import PropTypes from 'prop-types'
import Card from "./shared/Card"
import Button from "./shared/Button"
import SelectList from "./SelectList"
import {useState} from "react"
import { isDisabled } from "@testing-library/user-event/dist/utils"
function FeedBackForm({ addFeedback }) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [message, setMessage] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
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
            addFeedback(newFeedback)
            setText('');

        } else {
            setMessage("Feedback should be at list 10 charter")
            setIsDisabled(true);
        }
    }
  return (
    <Card>
        <form onSubmit={handleFormSubmit}>
            <h3>How would you like to rate our service?</h3>
            <SelectList 
                selected={rating}
                select={(selected) => setRating(selected)}/>
            <div className="input-group ">
                <input 
                    type="text" 
                    placeholder="Your Feedback" 
                    value={text} 
                    onChange={handleInputChange}
                />
                <Button type="submit" version="secondary" isDisabled={isDisabled}> Send </Button>                
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

FeedBackForm.propTypes = {
    addFeedback: PropTypes.func.isRequired,
}
export default FeedBackForm