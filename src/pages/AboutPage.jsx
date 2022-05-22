import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
function AboutPage() {
  return (
    <Card>
        <h3>About Page</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et explicabo obcaecati dolor cupiditate dicta modi repellat corporis eaque praesentium!</p>
        <Link to="/"> Go Back</Link>
    </Card>
  )
}

export default AboutPage