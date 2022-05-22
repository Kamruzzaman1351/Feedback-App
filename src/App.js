import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStatus from "./components/FeedBackStatus";
import FeedBackForm from "./components/FeedBackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {

  return (
    <div>
        <Header/>
        <div className="container">
          <FeedbackProvider>
            <FeedBackForm />
            <FeedBackStatus />
            <FeedBackList />
          </FeedbackProvider>
        </div>
    </div>
  )
}

export default App;
