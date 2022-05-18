import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackData from "./data/FeedBackData";
import { useState } from "react";
import FeedBackStatus from "./components/FeedBackStatus";
function App() {
  const [feedback, setFeedback] = useState(FeedBackData);
  const handleDelete = (id) => {
    setFeedback(feedback.filter(item => {
      if(item.id !== id) {
        return item;
      }
    }))
  }
  return (
    <div>
        <Header/>
        <div className="container">
          <FeedBackStatus feedback={feedback}/>
          <FeedBackList feedback={feedback} handleDelete={handleDelete}/>
        </div>
    </div>
  )
}

export default App;
