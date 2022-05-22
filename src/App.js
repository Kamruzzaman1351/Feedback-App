import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStatus from "./components/FeedBackStatus";
import FeedBackForm from "./components/FeedBackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>        
            <Route path="/" element={
              <FeedbackProvider>
                <FeedBackForm />
                <FeedBackStatus />
                <FeedBackList />
              </FeedbackProvider>
                
              } />
              <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
