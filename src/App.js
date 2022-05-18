import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackData from "./data/FeedBackData";
import { useState } from "react";
import FeedBackStatus from "./components/FeedBackStatus";
import FeedBackForm from "./components/FeedBackForm";
import {v4 as uuidv4} from "uuid"
function App() {
  const [feedback, setFeedback] = useState(FeedBackData);  
  const handleDelete = (id) => {
    setFeedback(feedback.filter(item => {
      if(item.id !== id) {
        return item;
      }
    }))
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }
  return (
    <div>
        <Header/>
        <div className="container">
          <FeedBackForm
            addFeedback = {addFeedback}
            />
          <FeedBackStatus feedback={feedback}/>
          <FeedBackList feedback={feedback} handleDelete={handleDelete}/>
        </div>
    </div>
  )
}

export default App;
