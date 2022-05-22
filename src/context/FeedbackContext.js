import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {id: 1, rating: 10, feedback: "This beedback is form Feedback Context"}
    ]);
    
    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    }
    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are You Sure?")) {
            setFeedback(feedback.filter(item => {
                if(item.id !== id) {
                  return item;
                }
            }));
        }
    };

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext;