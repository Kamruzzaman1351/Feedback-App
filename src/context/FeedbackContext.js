import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid";
import FeedBackData from "../data/FeedBackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedBackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    });

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

    // Edit State Feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item:item,
            edit:true,
        })
    }

    // Update Feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((itme) => (itme.id === id) ? {...itme, ...updItem} : itme)
        )
    }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext;