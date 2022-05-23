import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";
import FeedBackData from "../data/FeedBackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    });

    useEffect(() => {        
        featchData();
    },[])
    // Feaching Feedback
    const featchData = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc", {
        method: "GET",
        });
        const data = await response.json();
        setFeedback(data);
    }
    
    // Add Feedback
    const addFeedback = async(newFeedback) => {
        const response = await fetch("http://localhost:5000/feedback", {
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        setFeedback([data,...feedback]);
    }
    // Delete Feedback
    const deleteFeedback = async(id) => {        
        if(window.confirm("Are You Sure?")) {
            const response = await fetch(`http://localhost:5000/feedback/${id}`, {
                method: "DELETE",
                headers: {"Content-type":"application/json"},
            });
            setFeedback(feedback.filter(item => {
                if(item.id !== id) {
                  return item;
                }
            }));
        }
    };

    // Set Feedback Edit State
    const editFeedback = (item) => {
        setFeedbackEdit({
            item:item,
            edit:true,
        })
    }

    // Update Feedback
    const updateFeedback = async(id, updItem) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: "PUT",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(updItem),
        });
        const data = await response.json();
        setFeedback(
            feedback.map((itme) => (itme.id === id) ? {...itme, ...data} : itme)
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