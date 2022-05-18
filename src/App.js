import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackData from "./data/FeedBackData";
import { useState } from "react";
function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  return (
    <div>
        <Header/>
        <div className="container">
          <FeedBackList feedback={feedback}/>
        </div>
    </div>
  )
}

export default App;
