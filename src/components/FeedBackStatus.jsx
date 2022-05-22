import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedBackStatus() {
    const {feedback} = useContext(FeedbackContext);
    let avrageRating = feedback.reduce((acc,curr)=> {
        return acc + curr.rating;
    },0);
    avrageRating = avrageRating / feedback.length;
    avrageRating = avrageRating.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Avarage Rating: {isNaN(avrageRating)? 0 : avrageRating}</h4>
    </div>
  )
}

export default FeedBackStatus